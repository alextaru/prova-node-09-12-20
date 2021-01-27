import Sequelize, { Model } from 'sequelize';
import database from '../database/Connection';

class User extends Model {
  public readonly id!: number;
  public name!: string;
  public username!: string;
  public email!: string;
  public password!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
    {
        name: Sequelize.STRING,
        username: Sequelize.STRING,
        password: Sequelize.STRING,
        email: Sequelize.STRING,
    },
    {
        sequelize: database.connection,
        schema: 'users',
        tableName: 'tb_user',
        timestamps: true,
    }
);

export default User;