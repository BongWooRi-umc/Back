'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull:false,
        type: Sequelize.STRING(10),
      },
      phone: {
        allowNull:false,
        type :Sequelize.STRING(15),
      },
      email: {
        allowNull:false,
        type: Sequelize.STRING(64),
      },
      nickname: {
        allowNull:false,
        type: Sequelize.STRING(16),
      },
      password: {
        allowNull:false,
        type: Sequelize.STRING(20),
      },
      portrait: {
        type:Sequelize.STRING(255),
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
    await queryInterface.dropTable('Users');
  }
};