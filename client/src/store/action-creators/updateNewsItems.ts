import { Dispatch } from "redux";
import { NewsItemsAction, NewsItemsActionTypes } from "../../types/NewsItems";
import NewsService from "../../api/NewsService";

export const updateNewsItems = () => {
  return async (dispatch: Dispatch<NewsItemsAction>) => {
    try {
      dispatch({ type: NewsItemsActionTypes.UPDATE_NEWS_ITEMS });
      const list = await NewsService.updateNews();
      if (list.data[0]) {
        console.log(list);
        for (let i = list.data.length - 1; i >= 0; i--) {
          const response = await NewsService.getNewsItem(list.data[i]);
          dispatch({
            type: NewsItemsActionTypes.UPDATE_NEWS_ITEMS_SUCCESS,
            payload: response.data,
          });
        }
      } else {
        dispatch({
          type: NewsItemsActionTypes.UPDATE_NEWS_ITEMS_BREAK,
        });
      }
    } catch (e) {
      dispatch({
        type: NewsItemsActionTypes.UPDATE_NEWS_ITEMS_ERROR,
        payload: "Something went wrong",
      });
    }
  };
};
