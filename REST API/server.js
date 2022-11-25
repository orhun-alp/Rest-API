require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to database"));

app.use(express.json());

const subscribersRouter = require("./routers/subscribers.js");
app.use("/subscribers", subscribersRouter);

app.listen(3001, (req, res) => {
  console.log("server started");
});
