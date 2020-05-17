var express = require("express");

var router = express.Router();
var db = require("../models");

// var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  db.burger.findAll({ raw: true }).then(function (data) {
    var hbsObject = {
      burger: data,
    };
    console.log("get all", hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", function (req, res) {
  db.burger
    .create({
      name: req.body.name,
      // devoured: req.body.devoured,
    })
    .then(function (result) {
      res.json(result);
    })
    .catch(function (err) {
      res.json(err);
    });
});

router.put("/api/burger/:id", function (req, res) {
  db.burger
    .update(
      {
        devoured: true,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
    .then(function (result) {
      res.json(result);
    })
    .catch(function (err) {
      res.json(err);
    });
});

router.delete("/api/burger/:id", function (req, res) {
  db.burger
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then(function (result) {
      res.json(result);
    });
});

module.exports = router;
