import {
  NewsListState,
  NewsListActionTypes,
  NewsListAction,
} from "../../types/NewsList";

const initialState: NewsListState = {
  newsList: [],
  loading: false,
  error: null,
};

export const newsListReducer = (
  state = initialState,
  action: NewsListAction
): NewsListState => {
  switch (action.type) {
    case NewsListActionTypes.FETCH_NEWS_LIST:
      return { loading: true, error: null, newsList: [] };

    case NewsListActionTypes.FETCH_NEWS_LIST_SUCCESS:
      return {
        loading: false,
        error: null,
        newsList: action.payload,
      };

    case NewsListActionTypes.FETCH_NEWS_LIST_ERROR:
      return { loading: false, error: action.payload, newsList: [] };

    default:
      return state;
  }
};
