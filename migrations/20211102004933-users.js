"use strict";
const tables = require("../db/table_names");

module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.createTable(tables.USERS, {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.literal("NOW()"),
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, DataTypes) => {
    return queryInterface.dropTable(tables.USERS);
  },
};
