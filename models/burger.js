var orm = require("../config/orm.js");

// code that calls the ORM fucntions using specific input for the ORM.

var burger = {
  all: function (cb) {
    orm.all("burger", function (res) {
      cb(res);
    });
  },
  create: function (cols, vals, cb) {
    orm.create("burger", cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (objColsVals, condition, cb) {
    orm.update("burger", objColsVals, condition, function (res) {
      cb(res);
    });
  },
  delete: function (condition, cb) {
    orm.delete("burger", condition, function (res) {
      cb(res);
    });
  },
};

module.exports = burger;
