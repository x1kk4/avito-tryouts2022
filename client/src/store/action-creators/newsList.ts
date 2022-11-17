import { Dispatch } from "redux";
import { NewsListAction, NewsListActionTypes } from "../../types/NewsList";
import NewsService from "../../api/NewsService";

export const fetchNewsList = () => {
  return (dispatch: Dispatch<NewsListAction>) => {
    try {
      dispatch({ type: NewsListActionTypes.FETCH_NEWS_LIST });
      NewsService.getNews().then((res) =>
        dispatch({
          type: NewsListActionTypes.FETCH_NEWS_LIST_SUCCESS,
          payload: res.data,
        })
      );
    } catch (e) {
      dispatch({
        type: NewsListActionTypes.FETCH_NEWS_LIST_ERROR,
        payload: "Something went wrong",
      });
    }
  };
};
