const express = require("express");
const connection = require("../config/db");

class UserController {
  getOneUser = (req, res) => {
    res.render("User X");
  };
}

module.exports = new UserController();
