const express = require('express');
const connect = require('./config/database');
const app = express();
const {TweetRepository} = require('./repository/tweet-repo');
const TweetService = require('./service/tweet-service');

app.listen(3000, async () => {
    console.log('server started');
    await connect();
    console.log('Mongo db connected');
});