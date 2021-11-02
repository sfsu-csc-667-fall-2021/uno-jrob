"use strict";

const TABLE_NAME = "users";

module.exports = {
  up: async (queryInterface, DataTypes) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: DataTypes.INTEGER });
     */
    return queryInterface.createTable(TABLE_NAME, {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
    });
  },

  down: async (queryInterface, DataTypes) => {
    return queryInterface.dropTable(TABLE_NAME);
  },
};
