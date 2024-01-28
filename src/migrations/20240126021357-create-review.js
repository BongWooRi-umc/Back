'use strict';
const { Score } = require('../enums/score');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.STRING(20)
      },
      actId: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(100)
      },
      content: {
        type: Sequelize.TEXT
      },
      score: {
        type: Sequelize.ENUM(...Object.values(Score)),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reviews');
  }
};