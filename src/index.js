import express from "express";
import { connect } from "./config/database.js";
import bodyParser from "body-parser";
const app = express();

import apiRoutes from "./routes/index.js";
import { UserRepository, TweetRepository } from "./repository/index.js";
import LikeService from "./service/like-service.js";
import Like from "./models/like.js";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

app.listen(3000, async () => {
  console.log("server started");
  await connect();
  console.log("Mongo db connected");
});
