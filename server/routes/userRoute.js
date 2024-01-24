const express = require("express");
const router = express.Router();
const UsereController = require("../controller/userController");

// http://localhost:4000/user/getOneUser/:user_id
router.get("/getOneUser", UsereController.getOneUser);

module.exports = router;
