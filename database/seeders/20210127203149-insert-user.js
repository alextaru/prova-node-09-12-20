'use strict';
const schema = 'users';
const tableName = 'tb_user'
const date = new Date();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert(
      { schema, tableName },
      [
        { 
          name: 'alexandre', 
          username: 'alexandre',
          email: 'alex.taru@yahoo.com.br',
          password: '123456',
          createdAt: date,
          updatedAt: date
        }
      ],
      { schema }
    )
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete({ schema, tableName }, {email: 'alex.taru@yahoo.com.br'}, {})
  }
};
