import express from "express";
import dotenv from "dotenv";
import { Http, HttpRequestOptions, Method } from "node-https";
import { updateNewsList } from "./newsService";

let temp: Number[] = [];

dotenv.config();

const http = new Http();

const PORT = process.env.PORT;
const API = process.env.API_HOST;

const app = express();

app.get("/news", async (req, res) => {
  try {
    const result = await http.get(`${API}`);
    res.status(result.status).json(result.data && result.data.slice(0, 100));
    temp = result.data && result.data.slice(0, 100);
  } catch (e) {
    res.status(500).json;
  }
});

app.get("/updateNews", async (req, res) => {
  try {
    let items;
    const result = await http.get(`${API}`);
    let curr = result.data ? result.data.slice(0, 100) : [];

    const bebra = updateNewsList(temp, curr);
    temp = bebra.temp;
    res.status(200).json(bebra.items);
  } catch (e) {
    res.status(500).json(e);
  }
});

function startApp() {
  try {
    app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

startApp();
