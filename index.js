// const express = require("express"); // "type": "commonjs"
import express from "express"; // "type": "module"
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
// import { room_details } from "./room_data.js";
const app = express();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const client = new MongoClient(MONGO_URL);
await client.connect();
console.log("Mongo is connected !!!  ");

app.get("/", async function (request, response) {
  const rooms = await client
    .db("Rooms")
    .collection("Rooms Available")
    .find({})
    .toArray();
  response.send(rooms);
});

app.get("/CustomersDetails", async function (request, response) {
  const customers = await client
  .db("Rooms")
    .collection("Customer details")
    .find(
      {},)
    .toArray();
    
  response.send(customers);
});

app.get("/RoomBookedData", async function (request, response) {
  const bookedRooms = await client
  .db("Rooms")
  .collection("Customers Details")
  .find({})
  .toArray();
  response.send(bookedRooms);
});

app.post("/add_rooms", express.json(), async function (request, response) {
  const data = request.body;
  const result = await client
    .db("Rooms")
    .collection("Rooms Available")
    .insertOne(data);
  response.send(result);
});

app.post("/room_booking", express.json(), async function (request, response) {
  const data = request.body;
  const result = await client
    .db("Rooms")
    .collection("Customers Details")
    .insertOne(data);
  response.send(result);
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
