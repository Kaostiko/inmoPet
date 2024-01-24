const express = require("express");
const router = express.Router();
const AdminController = require("../controller/adminController");

// http://localhost:4000/admin/allUsersData
router.get("/allUsersData", AdminController.getUsersData);

module.exports = router;
