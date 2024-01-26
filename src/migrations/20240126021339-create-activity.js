'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Activities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      orgId: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      recruBegin: {
        type: Sequelize.DATE
      },
      recruEnd: {
        type: Sequelize.DATE
      },
      recruNum: {
        type: Sequelize.INTEGER
      },
      signedNum: {
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.TEXT
      },
      actBegin: {
        type: Sequelize.DATE
      },
      actEnd: {
        type: Sequelize.DATE
      },
      createdAt: {
        type: Sequelize.DATE
      },
      modifiedAt: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Activities');
  }
};