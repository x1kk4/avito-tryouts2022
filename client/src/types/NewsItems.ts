export type NewsItem = {
  deleted?: boolean;
  dead?: boolean;
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
};

export interface NewsItemsState {
  newsItems: NewsItem[];
  loading: boolean;
  error: null | string;
}

export enum NewsItemsActionTypes {
  FETCH_NEWS_ITEMS = "FETCH_NEWS_ITEMS",
  FETCH_NEWS_ITEMS_SUCCESS = "FETCH_NEWS_ITEMS_SUCCESS",
  FETCH_NEWS_ITEMS_ERROR = "FETCH_NEWS_ITEMS_ERROR",
  UPDATE_NEWS_ITEMS = "UPDATE_NEWS_ITEMS",
  UPDATE_NEWS_ITEMS_SUCCESS = "UPDATE_NEWS_ITEMS_SUCCESS",
  UPDATE_NEWS_ITEMS_BREAK = "UPDATE_NEWS_ITEMS_BREAK",
  UPDATE_NEWS_ITEMS_ERROR = "UPDATE_NEWS_ITEMS_ERROR",
}

interface FetchNewsItemsAction {
  type: NewsItemsActionTypes.FETCH_NEWS_ITEMS;
}

interface FetchNewsItemsSuccessAction {
  type: NewsItemsActionTypes.FETCH_NEWS_ITEMS_SUCCESS;
  payload: NewsItem;
}

interface FetchNewsItemsErrorAction {
  type: NewsItemsActionTypes.FETCH_NEWS_ITEMS_ERROR;
  payload: string;
}

interface UpdateNewsItemsAction {
  type: NewsItemsActionTypes.UPDATE_NEWS_ITEMS;
}

interface UpdateNewsItemsSuccessAction {
  type: NewsItemsActionTypes.UPDATE_NEWS_ITEMS_SUCCESS;
  payload: NewsItem;
}

interface UpdateNewsItemsBreakAction {
  type: NewsItemsActionTypes.UPDATE_NEWS_ITEMS_BREAK;
}

interface UpdateNewsItemsErrorAction {
  type: NewsItemsActionTypes.UPDATE_NEWS_ITEMS_ERROR;
  payload: string;
}

export type NewsItemsAction =
  | FetchNewsItemsAction
  | FetchNewsItemsSuccessAction
  | FetchNewsItemsErrorAction
  | UpdateNewsItemsAction
  | UpdateNewsItemsSuccessAction
  | UpdateNewsItemsBreakAction
  | UpdateNewsItemsErrorAction;
