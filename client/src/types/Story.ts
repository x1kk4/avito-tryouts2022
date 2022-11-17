import { Comment } from "./Comment";
import { NewsItem } from "./NewsItems";

export interface StoryState {
  story: NewsItem | null;
  comments: Comment[];
  commentsCount: number;
  loading: boolean;
  error: null | string;
}

export enum StoryActionTypes {
  FETCH_STORY = "FETCH_STORY",
  FETCH_STORY_SUCCESS = "FETCH_STORY_SUCCESS",
  FETCH_STORY_ERROR = "FETCH_STORY_ERROR",

  FETCH_COMMENTS = "FETCH_COMMENTS",
  FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS",
  FETCH_COMMENTS_BREAK = "FETCH_COMMENTS_BREAK",
  FETCH_COMMENTS_ERROR = "FETCH_COMMENTS_ERROR",

  UPDATE_COMMENTS = "UPDATE_COMMENTS",
  UPDATE_COMMENTS_SUCCESS = "UPDATE_COMMENTS_SUCCESS",
  UPDATE_COMMENTS_BREAK = "UPDATE_COMMENTS_BREAK",
  UPDATE_COMMENTS_ERROR = "UPDATE_COMMENTS_ERROR",
}

interface FetchStoryAction {
  type: StoryActionTypes.FETCH_STORY;
}

interface FetchStorySuccessAction {
  type: StoryActionTypes.FETCH_STORY_SUCCESS;
  payload: NewsItem;
}

interface FetchStoryErrorAction {
  type: StoryActionTypes.FETCH_STORY_ERROR;
  payload: string;
}

interface FetchCommentsAction {
  type: StoryActionTypes.FETCH_COMMENTS;
}

interface FetchCommentsSuccessAction {
  type: StoryActionTypes.FETCH_COMMENTS_SUCCESS;
  payload: { comments: Comment[]; commentsCount: number };
}

interface FetchCommentsBreakAction {
  type: StoryActionTypes.FETCH_COMMENTS_BREAK;
}

interface FetchCommentsErrorAction {
  type: StoryActionTypes.FETCH_COMMENTS_ERROR;
  payload: string;
}

interface UpdateCommentsAction {
  type: StoryActionTypes.UPDATE_COMMENTS;
}

interface UpdateCommentsSuccessAction {
  type: StoryActionTypes.UPDATE_COMMENTS_SUCCESS;
  payload: { comment: Comment; commentsCount: number };
}

interface UpdateCommentsBreakAction {
  type: StoryActionTypes.UPDATE_COMMENTS_BREAK;
}

interface UpdateCommentsErrorAction {
  type: StoryActionTypes.UPDATE_COMMENTS_ERROR;
  payload: string;
}

export type StoryAction =
  | FetchStoryAction
  | FetchStorySuccessAction
  | FetchStoryErrorAction
  | FetchCommentsAction
  | FetchCommentsSuccessAction
  | FetchCommentsBreakAction
  | FetchCommentsErrorAction
  | UpdateCommentsAction
  | UpdateCommentsSuccessAction
  | UpdateCommentsBreakAction
  | UpdateCommentsErrorAction;
