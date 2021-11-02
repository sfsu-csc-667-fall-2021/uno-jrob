"use strict";
const tables = require("../db/table_names");

module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.createTable(tables.GAMES, {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      direction: { type: DataTypes.INTEGER, allowNull: false },
    });
  },

  down: async (queryInterface, DataTypes) => {
    return queryInterface.dropTable(tables.GAMES);
  },
};
