import axios from "axios";

const LOCAL_API_HOST =
  process.env.REACT_APP_LOCAL_API_HOST || "localhost:9000/";
const REMOTE_API_HOST =
  process.env.REACT_APP_REMOTE_API_HOST ||
  "https://hacker-news.firebaseio.com/v0/item/";

export const localApi = axios.create({
  baseURL: LOCAL_API_HOST,
  headers: {
    "Access-Control-Allow-Credentials": true,
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const remoteApi = axios.create({
  baseURL: REMOTE_API_HOST,
  headers: {
    "Access-Control-Allow-Credentials": true,
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default class NewsService {
  static getNews = () => {
    return localApi.get("news");
  };

  static updateNews = () => {
    return localApi.get("news/update");
  };

  static getNewsItem = (id: number) => {
    return remoteApi.get(`${id}.json?`);
  };
}
