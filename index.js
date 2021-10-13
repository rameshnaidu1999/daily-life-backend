import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import Postrouter from "./routes/postRoute.js";
dotenv.config();

// app config
const app = express();

// port and DB urls
const port = process.env.PORT || 5050;
//  this is url string
const DB_url =
  "mongodb+srv://ramesh:ramesh@cluster0.h8ctf.mongodb.net/dailylifeDB?retryWrites=true&w=majority";

mongoose.connect(DB_url).catch((err) => {
  consol.log("Err", err);
});

mongoose.connection.once("open", () => {
  console.log("DB connected");
});

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("hello there");
});

app.use("/posts", Postrouter);

app.listen(port, () => {
  console.log("server running on port", +port);
});
