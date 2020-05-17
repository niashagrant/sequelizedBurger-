module.exports = function (sequelize, DataTypes) {
  var burger = sequelize.define("burger", {
    name: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 150],
      },
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
  return burger;
};
