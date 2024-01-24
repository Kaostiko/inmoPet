const express = require("express");
const router = express.Router();
const HouseController = require("../controller/houseController");

// http://localhost:4000/house/getAllHouses
router.get("/getAllHouses", HouseController.getAllHouses);

module.exports = router;
