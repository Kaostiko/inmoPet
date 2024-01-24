const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

const adminRouter = require("./routes/adminRoute");
const userRouter = require("./routes/userRoute");
const houseRouter = require("./routes/houseRoute");

// middlewares
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/houses", houseRouter);

module.exports = app;
