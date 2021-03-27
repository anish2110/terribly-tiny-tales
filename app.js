const express = require("express");
const bodyParser = require("body-parser");

const route = require('./routes/route');

const path = require('path');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,PATCH,DELETE,OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use('/api', route);

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res, next) {
  if (!req.path.includes('api'))
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
  else next();
});


app.listen(5000, () => {
});