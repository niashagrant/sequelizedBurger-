module.exports = function (sequelize, DataTypes) {
  var burger = sequelize.define("burger", {
    nane: {
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
