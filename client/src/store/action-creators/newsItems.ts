import { Dispatch } from "redux";
import { NewsItemsAction, NewsItemsActionTypes } from "../../types/NewsItems";
import NewsService from "../../api/NewsService";
import { NewsId } from "../../types/NewsList";

export const fetchNewsItems = (list: NewsId[]) => {
  return (dispatch: Dispatch<NewsItemsAction>) => {
    try {
      dispatch({ type: NewsItemsActionTypes.FETCH_NEWS_ITEMS });
      list.map((id) => {
        // id === list[99]
        //   ?
        NewsService.getNewsItem(id).then((res) =>
          dispatch({
            type: NewsItemsActionTypes.FETCH_NEWS_ITEMS_SUCCESS,
            payload: { status: false, data: res.data },
          })
        );
        //   : NewsService.getNewsItem(id).then((res) =>
        //   dispatch({
        // type: NewsItemsActionTypes.FETCH_NEWS_ITEMS_SUCCESS,
        // payload: { status: true, data: res.data },
        //   })
        // );
      });
    } catch (e) {
      dispatch({
        type: NewsItemsActionTypes.FETCH_NEWS_ITEMS_ERROR,
        payload: "Something went wrong",
      });
    }
  };
};
