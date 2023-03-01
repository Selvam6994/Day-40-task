// const express = require("express"); // "type": "commonjs"
import express from "express"; // "type": "module"
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
// import { room_details } from "./room_data.js";
export const app = express();
import roomsRouter from './Router/Rooms.js'

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
export const client = new MongoClient(MONGO_URL);
await client.connect();
console.log("Mongo is connected !!!  ");

app.use("/rooms",roomsRouter)
app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
