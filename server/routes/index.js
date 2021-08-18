var express = require("express");
var router = express.Router();

var controller = require("../controllers/index");

router.get("/", controller.test);

module.exports = router;
