import { Dispatch } from "redux";
import { NewsItemsAction, NewsItemsActionTypes } from "../../types/NewsItems";
import NewsService from "../../api/NewsService";
import { NewsId } from "../../types/NewsList";

export const fetchNewsItems = (list: NewsId[]) => {
  return async (dispatch: Dispatch<NewsItemsAction>) => {
    try {
      dispatch({ type: NewsItemsActionTypes.FETCH_NEWS_ITEMS });

      for (let i = 0; i < list.length; i++) {
        const response = await NewsService.getNewsItem(list[i]);

        dispatch({
          type: NewsItemsActionTypes.FETCH_NEWS_ITEMS_SUCCESS,
          payload: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: NewsItemsActionTypes.FETCH_NEWS_ITEMS_ERROR,
        payload: "Something went wrong",
      });
    }
  };
};
