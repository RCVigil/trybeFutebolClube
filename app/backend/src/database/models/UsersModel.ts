import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class UserModel extends Model {
  declare id: number;
  declare username: string;
  declare role: string;
  declare email: string;
  declare password: string;
}

UserModel.init({
  id: {
    type: INTEGER,
    allowNull: true,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: STRING,
    allowNull: true,
  },
  role: {
    type: STRING,
    allowNull: true,
  },
  email: {
    type: STRING,
    allowNull: true,
  },
  password: {
    type: STRING,
    allowNull: true,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'user',
  tableName: 'users',
  timestamps: false,
});

export default UserModel;
