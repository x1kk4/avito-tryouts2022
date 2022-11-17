import { Dispatch } from "redux";
import { StoryActionTypes, StoryAction } from "../../types/Story";
import CommentsService from "../../api/CommentsService";
import { CommentId } from "../../types/Comment";
import { Comment } from "../../types/Comment";

const fetchCommentWithKids = async (
  rootId: number
): Promise<{ counter: number; comment: Comment }> => {
  let counter = 1;

  const rootComment = (await CommentsService.getComment(rootId)).data;
  if (rootComment?.kids?.length) {
    rootComment.childs = [];
    for (const commentKidId of rootComment.kids) {
      const fetchedKid = await fetchCommentWithKids(commentKidId);

      counter += fetchedKid.counter;
      rootComment.childs.push(fetchedKid.comment);
    }
  } else {
    rootComment.childs = null;
  }

  return {
    counter,
    comment: rootComment,
  };
};

export const fetchComments = (rootIdList: CommentId[]) => {
  return async (dispatch: Dispatch<StoryAction>) => {
    try {
      dispatch({ type: StoryActionTypes.FETCH_COMMENTS });

      let counter = 1;
      const rootCommentTree = [];

      for (const rootId of rootIdList) {
        const fetchedKid = await fetchCommentWithKids(rootId);
        rootCommentTree.push(fetchedKid.comment);
        counter += fetchedKid.counter;
      }

      console.debug(rootCommentTree);

      dispatch({
        type: StoryActionTypes.FETCH_COMMENTS_SUCCESS,
        payload: { comments: rootCommentTree, commentsCount: counter },
      });
      dispatch({
        type: StoryActionTypes.FETCH_COMMENTS_BREAK,
      });
    } catch (e) {
      dispatch({
        type: StoryActionTypes.FETCH_COMMENTS_ERROR,
        payload: "Something went wrong",
      });
    }
  };
};
