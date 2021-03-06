// var express = require('express')
import express from "express";
import open from "open";
import webpack from "webpack";
import webpackMiddleware from "webpack-dev-middleware";
import config from "../webpack.config.dev";

const app = express();
const port = 3000;
const compiler = webpack(config);

app.use(
  webpackMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
		colors: true
	}
  })
);

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

import path from "path";
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../www/index.html"));
});

app.listen(port, function(err) {
  console.log(`Example app listening on port ${port}`);
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});
