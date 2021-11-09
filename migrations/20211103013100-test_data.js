"use strict";
const tables = require("../db/table_names");

module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.bulkInsert(tables.USERS, [
      {
        id: -1,
        email: "one@test.com",
        password: "password",
      },
      {
        id: -2,
        email: "two@test.com",
        password: "password",
      },
      {
        id: -3,
        email: "three@test.com",
        password: "password",
      },
      {
        id: -4,
        email: "four@test.com",
        password: "password",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(tables.USERS, {
      id: { [Sequelize.Op.lt]: 0 },
    });
  },
};
