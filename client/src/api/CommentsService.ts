import axios from "axios";
import { Comment } from "../types/Comment";

const REMOTE_API_HOST =
  process.env.REACT_APP_REMOTE_API_HOST ||
  "https://hacker-news.firebaseio.com/v0/item/";

export const remoteApi = axios.create({
  baseURL: REMOTE_API_HOST,
  headers: {
    "Content-Type": "application/json",
    // withCredentuals: true,
  },
});

export default class CommentsService {
  static getComment = (id: number) => {
    return remoteApi.get<Comment>(`${id}.json?`);
  };
}
