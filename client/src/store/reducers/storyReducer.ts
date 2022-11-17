import { StoryState, StoryActionTypes, StoryAction } from "../../types/Story";

const initialState: StoryState = {
  story: null,
  comments: [],
  loading: false,
  error: null,
  commentsCount: 0,
};

export const storyReducer = (
  state = initialState,
  action: StoryAction
): StoryState => {
  switch (action.type) {
    case StoryActionTypes.FETCH_STORY:
      return {
        loading: true,
        error: null,
        comments: [],
        story: null,
        commentsCount: state.commentsCount,
      };

    case StoryActionTypes.FETCH_STORY_SUCCESS:
      return {
        loading: false,
        error: null,
        comments: [],
        story: action.payload,
        commentsCount: state.commentsCount,
      };

    case StoryActionTypes.FETCH_STORY_ERROR:
      return {
        loading: false,
        error: action.payload,
        comments: [],
        story: null,
        commentsCount: state.commentsCount,
      };

    case StoryActionTypes.FETCH_COMMENTS:
      return {
        loading: true,
        error: null,
        comments: [],
        story: state.story,
        commentsCount: state.commentsCount,
      };

    case StoryActionTypes.FETCH_COMMENTS_SUCCESS:
      return {
        loading: true,
        error: null,
        comments: [action.payload.comment, ...state.comments],
        story: state.story,
        commentsCount: action.payload.commentsCount,
      };
    case StoryActionTypes.FETCH_COMMENTS_BREAK:
      return {
        loading: false,
        error: null,
        comments: state.comments,
        story: state.story,
        commentsCount: state.commentsCount,
      };
    case StoryActionTypes.FETCH_COMMENTS_ERROR:
      return {
        loading: false,
        error: action.payload,
        comments: state.comments,
        story: state.story,
        commentsCount: state.commentsCount,
      };
    case StoryActionTypes.UPDATE_COMMENTS:
      return {
        loading: true,
        error: null,
        comments: [],
        story: state.story,
        commentsCount: state.commentsCount,
      };
    case StoryActionTypes.UPDATE_COMMENTS_SUCCESS:
      return {
        loading: true,
        error: null,
        comments: [action.payload.comment, ...state.comments],
        story: state.story,
        commentsCount: state.commentsCount + action.payload.commentsCount,
      };
    case StoryActionTypes.UPDATE_COMMENTS_BREAK:
      return {
        loading: false,
        error: null,
        comments: state.comments,
        story: state.story,
        commentsCount: state.commentsCount,
      };
    case StoryActionTypes.UPDATE_COMMENTS_ERROR:
      return {
        loading: false,
        error: action.payload,
        comments: state.comments,
        story: state.story,
        commentsCount: state.commentsCount,
      };
    default:
      return state;
  }
};
