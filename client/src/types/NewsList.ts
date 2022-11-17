export type NewsId = number;

export type NewsList = NewsId[];

export interface NewsListState {
  newsList: NewsList;
  loading: boolean;
  error: null | string;
}

export enum NewsListActionTypes {
  FETCH_NEWS_LIST = "FETCH_NEWS_LIST",
  FETCH_NEWS_LIST_SUCCESS = "FETCH_NEWS_LIST_SUCCESS",
  FETCH_NEWS_LIST_ERROR = "FETCH_NEWS_LIST_ERROR",
}

interface FetchNewsListAction {
  type: NewsListActionTypes.FETCH_NEWS_LIST;
}

interface FetchNewsListSuccessAction {
  type: NewsListActionTypes.FETCH_NEWS_LIST_SUCCESS;
  payload: any[];
}

interface FetchNewsListErrorAction {
  type: NewsListActionTypes.FETCH_NEWS_LIST_ERROR;
  payload: string;
}

export type NewsListAction =
  | FetchNewsListAction
  | FetchNewsListSuccessAction
  | FetchNewsListErrorAction;
