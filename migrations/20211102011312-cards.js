"use strict";
const tables = require("../db/table_names");

const CARD_LIST = (() => {
  const colors = ["red", "yellow", "blue", "green"];
  const number_cards = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const action_cards = ["Draw 2", "Reverse", "Skip"];
  const wild_cards = ["Wild", "Draw 4"];

  const deck = [];

  colors.forEach((color) => {
    // One zero for each color
    deck.push({ color, displayName: "0" });

    // Two of each number card (other than 0)
    const nums = number_cards.map((displayName) => ({ color, displayName }));
    deck.push(...nums, ...nums);

    // Two of each action card
    const actions = action_cards.map((displayName) => ({ color, displayName }));
    deck.push(...actions, ...actions);
  });

  // Four of each wild card
  const wilds = wild_cards.map((displayName) => ({
    color: "wild",
    displayName,
  }));
  deck.push(...wilds, ...wilds, ...wilds, ...wilds);

  return deck;
})();

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable(tables.CARDS, {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      color: { type: DataTypes.STRING, allowNull: false },
      displayName: { type: DataTypes.STRING, allowNull: false },
    });

    return queryInterface.bulkInsert(tables.CARDS, CARD_LIST);
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable(tables.CARDS);
  },
};
