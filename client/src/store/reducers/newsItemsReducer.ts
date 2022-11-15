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
      console.log(state.loading);
      return {
        loading: action.payload.status,
        error: null,
        newsItems: [...state.newsItems, action.payload.data],
      };

    case NewsItemsActionTypes.FETCH_NEWS_ITEMS_ERROR:
      return { loading: false, error: action.payload, newsItems: [] };

    default:
      return state;
  }
};
