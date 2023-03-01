import express from "express";
import { getRoomsData, getCustomerDetails, bookedRoomsData, addRooms, roomBooking } from "../service/router.service.js";

const router = express.Router();
router.get("/", async function (request, response) {
  const rooms = await getRoomsData();
  response.send(rooms);
});
router.get("/CustomersData", async function (request, response) {
  const customers = await getCustomerDetails();
console.log(customers);
  response.send(customers);
});
router.get("/RoomBookedData", async function (request, response) {
  const bookedRooms = await bookedRoomsData();
  response.send(bookedRooms);
});
router.post("/add_rooms", express.json(), async function (request, response) {
  const data = request.body;
  const result = await addRooms(data);
  response.send(result);
});
router.post("/room_booking", express.json(), async function (request, response) {
  const data = request.body;
  const result = await roomBooking(data);
  response.send(result);
});
export default router;


