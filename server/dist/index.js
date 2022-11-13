"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const node_https_1 = require("node-https");
const newsService_1 = require("./newsService");
let temp = [];
dotenv_1.default.config();
const http = new node_https_1.Http();
const PORT = process.env.PORT;
const API = process.env.API_HOST;
const app = (0, express_1.default)();
app.get("/news", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield http.get(`${API}`);
        res.status(result.status).json(result.data && result.data.slice(0, 100));
        temp = result.data && result.data.slice(0, 100);
    }
    catch (e) {
        res.status(500).json;
    }
}));
app.get("/updateNews", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let items;
        const result = yield http.get(`${API}`);
        let curr = result.data ? result.data.slice(0, 100) : [];
        const bebra = (0, newsService_1.updateNewsList)(temp, curr);
        temp = bebra.temp;
        res.status(200).json(bebra.items);
    }
    catch (e) {
        res.status(500).json(e);
    }
}));
function startApp() {
    try {
        app.listen(PORT, () => console.log(`Running on port ${PORT}`));
    }
    catch (e) {
        console.log(e);
    }
}
startApp();
