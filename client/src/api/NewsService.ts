import axios from "axios";
import { NewsItem } from "../types/NewsItems";
import { NewsId } from "../types/NewsList";

const LOCAL_API_HOST =
  process.env.REACT_APP_LOCAL_API_HOST || "http://localhost:9000/";
const REMOTE_API_HOST =
  process.env.REACT_APP_REMOTE_API_HOST ||
  "https://hacker-news.firebaseio.com/v0/item/";

export const localApi = axios.create({
  baseURL: LOCAL_API_HOST,
  headers: {
    "Access-Control-Allow-Credentials": true,
    "Content-Type": "application/json",
  },
});

export const remoteApi = axios.create({
  baseURL: REMOTE_API_HOST,
  headers: {
    "Content-Type": "application/json",
  },
});

export default class NewsService {
  static getNews = () => {
    return localApi.get("news");
  };

  static updateNews = () => {
    return localApi.get("news/update");
  };

  static getNewsItem = (id: NewsId) => {
    return remoteApi.get<NewsItem>(`${id}.json?`);
  };
}
