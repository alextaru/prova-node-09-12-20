import Sequelize from 'sequelize';
const databaseConfig = require('../config/sequelizeConfig');

class Database {
  public connection: Sequelize.Sequelize;

  constructor() {
    this.init();
  }

  init(): void {
    this.connection = new Sequelize.Sequelize(databaseConfig);
  }
}

const database: Database = new Database();

export default database;