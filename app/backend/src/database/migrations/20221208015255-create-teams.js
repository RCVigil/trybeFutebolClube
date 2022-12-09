"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('teams', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: true,
      },
      teamName: {
        type: Sequelize.STRING,
        allowNull: true,
        field: 'team_name',
      },
  });
},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("teams");
  },
};
