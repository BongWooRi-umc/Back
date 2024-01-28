'use strict';
const {ApplyStatus} = require('../enums/applyStatus');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserActs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      activityId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      applyStatus: {
        allowNull:false,
        type: Sequelize.ENUM(...Object.values(ApplyStatus)),
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
    await queryInterface.dropTable('UserActs');
  }
};