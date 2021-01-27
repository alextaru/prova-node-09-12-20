'use strict';
const schema = 'users';
const tableName = 'tb_user';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      tableName,
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        username: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        }
      },
      { schema }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable({ schema, tableName });
  }
};