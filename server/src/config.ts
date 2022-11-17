import codes from "http-status-codes";
import express from "express";
import dotenv from "dotenv";
import { Http, HttpRequestOptions, Method } from "node-https";
import { updateNewsList } from "./newsService";
import { NewsApiResponse, NewsComponentId } from "./types";
import cors from "cors";
dotenv.config();

let temp: NewsComponentId[] = [];

const http = new Http();

const API = process.env.API_HOST;
const DEFAULT_LIST_AMOUNT = parseInt(process.env.DEFAULT_LIST_AMOUNT as string);

const app = express();

app.use(cors());

app.get("/news", async (req: express.Request, res: express.Response) => {
  try {
    const result: NewsApiResponse = (await http.get(`${API}`)) as any;

    if (!result?.data) {
      throw new Error("API is not currently available");
    }

    temp = result.data.slice(0, DEFAULT_LIST_AMOUNT);

    res.status(codes.OK).json(result.data.slice(0, DEFAULT_LIST_AMOUNT));
  } catch (e) {
    console.error(`Error when getting news: ${e}`);

    res.status(codes.BAD_REQUEST).json(e);
  }
});

app.get("/news/update", async (req: express.Request, res: express.Response) => {
  try {
    const result: NewsApiResponse = (await http.get(`${API}`)) as any;

    if (!result?.data) {
      throw new Error("API is not currently available");
    }

    const curr = result.data ? result.data.slice(0, DEFAULT_LIST_AMOUNT) : [];
    const output = updateNewsList(temp, curr);
    temp = output.temp;

    res.status(codes.OK).json(output.items);
  } catch (e) {
    console.error(`Error when updating news: ${e}`);

    res.status(codes.BAD_REQUEST).json(e);
  }
});

export default app;
