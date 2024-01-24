const express = require("express");
const connection = require("../config/db");

class HouseController {
  getAllHouses = (req, res) => {
    res.render("Houses");
  };
}

module.exports = new HouseController();
