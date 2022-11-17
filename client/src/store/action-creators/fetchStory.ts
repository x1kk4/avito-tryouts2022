import { Dispatch } from "redux";
import { StoryAction, StoryActionTypes } from "../../types/Story";
import NewsService from "../../api/NewsService";
import { NewsId } from "../../types/NewsList";

export const fetchStory = (id: NewsId) => {
  return async (dispatch: Dispatch<StoryAction>) => {
    try {
      dispatch({ type: StoryActionTypes.FETCH_STORY });

      const response = await NewsService.getNewsItem(id);
      dispatch({
        type: StoryActionTypes.FETCH_STORY_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: StoryActionTypes.FETCH_STORY_ERROR,
        payload: "Something went wrong",
      });
    }
  };
};
