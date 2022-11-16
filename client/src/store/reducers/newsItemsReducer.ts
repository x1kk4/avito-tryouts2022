import {
  NewsItemsState,
  NewsItemsActionTypes,
  NewsItemsAction,
} from "../../types/NewsItems";

const initialState: NewsItemsState = {
  newsItems: [],
  loading: false,
  error: null,
};

export const newsItemsReducer = (
  state = initialState,
  action: NewsItemsAction
): NewsItemsState => {
  switch (action.type) {
    case NewsItemsActionTypes.FETCH_NEWS_ITEMS:
      return { loading: true, error: null, newsItems: [...state.newsItems] };

    case NewsItemsActionTypes.FETCH_NEWS_ITEMS_SUCCESS:
      return {
        loading: false,
        error: null,
        newsItems: [...state.newsItems, action.payload],
      };

    case NewsItemsActionTypes.FETCH_NEWS_ITEMS_ERROR:
      return { loading: false, error: action.payload, newsItems: [] };

    case NewsItemsActionTypes.UPDATE_NEWS_ITEMS:
      return { loading: true, error: null, newsItems: [...state.newsItems] };

    case NewsItemsActionTypes.UPDATE_NEWS_ITEMS_SUCCESS:
      return {
        loading: false,
        error: null,
        newsItems: [action.payload, ...state.newsItems.slice(0, -1)],
      };
    case NewsItemsActionTypes.UPDATE_NEWS_ITEMS_BREAK:
      return { loading: false, error: null, newsItems: [...state.newsItems] };
    case NewsItemsActionTypes.UPDATE_NEWS_ITEMS_ERROR:
      return {
        loading: false,
        error: action.payload,
        newsItems: [...state.newsItems],
      };
    default:
      return state;
  }
};
