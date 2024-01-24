const express = require("express");
const connection = require("../config/db");

class AdminController {
  getUsersData = (req, res) => {
    res.render("Admin Data");
  };
}

// AdminController.ACTUAL_YEAR = 2023

module.exports = new AdminController();
