"use strict";
const tables = require("./table_names");

module.exports = {
  up: async (queryInterface, DataTypes) => {
    queryInterface.createTable(tables.GAME_USERS, {
      game_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      current_player: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, DataTypes) => {
    return queryInterface.dropTable(tables.GAME_USERS);
  },
};
