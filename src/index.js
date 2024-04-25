import express from "express";
import { connect } from "./config/database.js";
import bodyParser from "body-parser";
import passport from "passport";
const app = express();

import apiRoutes from "./routes/index.js";
import {passportAuth} from './config/jwtmiddleware.js'
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(passport.initialize());
passportAuth(passport);

app.use("/api", apiRoutes);

app.listen(3000, async () => {
  console.log("server started");
  await connect();
  console.log("Mongo db connected");
});
