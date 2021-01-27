import Sequelize from 'sequelize';
const databaseConfig = require('../config/sequelizeConfig');

class Connection {
  public connection: Sequelize.Sequelize;

  constructor() {
    this.init();
  }

  init(): void {
    this.connection = new Sequelize.Sequelize(databaseConfig);
  }
}

const database: Connection = new Connection();

export default Connection;