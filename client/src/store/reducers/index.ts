import { combineReducers } from "redux";
import { newsItemsReducer } from "./newsItemsReducer";
import { newsListReducer } from "./newsListReducer";
import { storyReducer } from "./storyReducer";

export const rootReducer = combineReducers({
  newsList: newsListReducer,
  newsItems: newsItemsReducer,
  story: storyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
