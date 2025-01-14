const mongoose = require("mongoose");

const BusSchema = new mongoose.Schema({
  departure: String,
  arrival: String,
  departureTime: String,
  arrivalTime: String,
  duration: String,
  busType: String,
  model: String,
  busNo: String,
  depotName: String,
  price: String,
  availableSeats: String,
});

const BusModel = mongoose.model("buse", BusSchema);
module.exports = BusModel;
