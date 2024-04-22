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

  const userRepo = new UserRepository();
  const tweetRepo = new TweetRepository();
  const likeservice = new LikeService();
  const user = await userRepo.getAll(); 

  const tweets = await tweetRepo.getAll(0,10); 
  await likeservice.toggleLike(tweets[0].id , "Tweet" ,user[0].id);
});
