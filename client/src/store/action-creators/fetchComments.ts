import { Dispatch } from "redux";
import { StoryActionTypes, StoryAction } from "../../types/Story";
import CommentsService from "../../api/CommentsService";
import { CommentId } from "../../types/Comment";
import { Comment } from "../../types/Comment";

const recursiveCommentsFetch = async (comment: Comment, counter: number) => {
  if (comment.kids) {
    for (let i = 0; i < comment.kids.length; i++) {
      const newResponse = await CommentsService.getComment(comment.kids[i]);
      counter++;
      comment.childs.push(newResponse.data);
      recursiveCommentsFetch(newResponse.data, counter);
    }
  }
};

export const fetchComments = (list: CommentId[]) => {
  return async (dispatch: Dispatch<StoryAction>) => {
    try {
      dispatch({ type: StoryActionTypes.FETCH_COMMENTS });

      for (let i = 0; i < list.length; i++) {
        let counter: number = 0;
        let tempComment: Comment;

        const response = await CommentsService.getComment(list[i]);
        tempComment = response.data;

        recursiveCommentsFetch(tempComment, counter);

        dispatch({
          type: StoryActionTypes.FETCH_COMMENTS_SUCCESS,
          payload: { comment: tempComment, commentsCount: counter },
        });
        counter = 0;
      }

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
