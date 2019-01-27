'use strict';

const express = require("express");
const morgan = require("morgan");
const mongoose = require('mongoose');//require
mongoose.Promise = global.Promise;  //make mongoose use ES6 promises
const { DATABASE_URL, PORT } = require('./config');//require config.js file for PORT/DATABASE_URL & future test url
const { Blogpost } = require('./models');

const bprouter = require("./blogPostsRouter");
const app = express();

app.use(morgan("common"));
app.use(express.static('public'));
app.use(express.json());
app.use('/posts', bprouter);

let server;

function runServer() {
  const port = process.env.PORT || 8080;
  return new Promise((resolve, reject) => {
    server = app
      .listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve(server);
      })
      .on("error", err => {
        reject(err);
      });
  });
}

function closeServer() {
  return new Promise((resolve, reject) => {
    console.log("Closing server");
    server.close(err => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

if (require.main === module) {
  runServer().catch(err => console.error(err));
}

module.exports = { app, runServer, closeServer };