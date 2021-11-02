"use strict";
const tables = require("../db/table_names");

module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.createTable(tables.GAME_CARDS, {
      card_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      game_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      order: { type: DataTypes.INTEGER, allowNull: false },
      discarded: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      draw_pile: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    });
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable(tables.GAME_CARDS);
  },
};
