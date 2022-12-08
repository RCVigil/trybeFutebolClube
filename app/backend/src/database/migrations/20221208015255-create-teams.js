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
      team_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
  });
},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("teams");
  },
};
