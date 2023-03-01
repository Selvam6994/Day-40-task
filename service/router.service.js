import { client } from "../index.js";

export async function roomBooking(data) {
  return await client
    .db("Rooms")
    .collection("Customers Details")
    .insertOne(data);
}

export async function addRooms(data) {
  return await client.db("Rooms").collection("Rooms Available").insertOne(data);
}
export async function bookedRoomsData() {
  return await client
    .db("Rooms")
    .collection("Customers Details")
    .find({})
    .toArray();
}
export async function getCustomerDetails() {
  return await client
    .db("Rooms")
    .collection("Customers Details")
    .find({})
    .toArray();
}
export async function getRoomsData() {
  return await client
    .db("Rooms")
    .collection("Rooms Available")
    .find({})
    .toArray();
}
