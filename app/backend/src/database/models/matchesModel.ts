import { Model, INTEGER, STRING, BOOLEAN } from 'sequelize';
import db from '.';
import TeamsModel from './TeamsModel';

class MatchesModel extends Model {
  declare id: number;
  declare homeTeam: number;
  declare homeTeamGoals: number;
  declare awayTeam: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

MatchesModel.init({
  id: {
    type: INTEGER,
    allowNull: true,
    autoIncrement: true,
    primaryKey: true,
  },
  homeTeam: {
    type: STRING,
    allowNull: true,
  },
  homeTeamGoals: {
    type: STRING,
    allowNull: true,
  },
  awayTeam: {
    type: STRING,
    allowNull: true,
  },
  awayTeamGoals: {
    type: STRING,
    allowNull: true,
  },
  inProgress: {
    type: BOOLEAN,
    allowNull: true,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'matche',
  tableName: 'matches',
  timestamps: false,
});

MatchesModel.belongsTo(TeamsModel, {
  as: 'teamHome',
  foreignKey: 'homeTeam',
});

TeamsModel.belongsTo(MatchesModel, {
  as: 'teamHome',
  foreignKey: 'homeTeam',
});

MatchesModel.belongsTo(TeamsModel, {
  as: 'teamAway',
  foreignKey: 'awayTeam',
});

TeamsModel.belongsTo(MatchesModel, {
  as: 'teamAway',
  foreignKey: 'awayTeam',
});

export default MatchesModel;
