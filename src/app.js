const express = require("express");
const http = require("http");
const { globalRrrorHandler, notFoundRoute } = require("./common/error");
const mainRouter = require("./router/router");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());


app.use(mainRouter);

app.use(notFoundRoute);
app.use(globalRrrorHandler);

server.listen(4000, () => {
  console.log("server listening in 4000 port");
});

module.exports = app;