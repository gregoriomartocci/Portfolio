// 1. Requiero Express
var express = require("express");
var logger = require("morgan");
var cors = require("cors");

var dataRoute = require("./routes/index");

// 2. Guardo una instancia de Express en app
var app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", dataRoute);

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});
