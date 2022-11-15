import { combineReducers } from "redux";
import { newsItemsReducer } from "./newsItemsReducer";
import { newsListReducer } from "./newsListReducer";

export const rootReducer = combineReducers({
  newsList: newsListReducer,
  newsItems: newsItemsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
