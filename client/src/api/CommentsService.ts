import axios from "axios";

const REMOTE_API_HOST =
  process.env.REACT_APP_REMOTE_API_HOST ||
  "https://hacker-news.firebaseio.com/v0/item/";

export const remoteApi = axios.create({
  baseURL: REMOTE_API_HOST,
  headers: {
    "Access-Control-Allow-Credentials": true,
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default class CommentsService {
  static getComments = (ids: number[]) => {
    ids.map((id) => {
      return remoteApi.get(`${id}.json?`);
    });
  };
}
