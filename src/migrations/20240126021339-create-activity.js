'use strict';
const { ActSubject } = require('../enums/actSubject');
const { ActType } = require('../enums/actType');
const { IsOnline } = require('../enums/isOnline');
const { ConfirmType } = require('../enums/confirmType');
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
      orgId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(128)
      },
      recruBegin: {
        allowNull: false,
        type: Sequelize.DATE
      },
      recruEnd: {
        allowNull: false,
        type: Sequelize.DATE
      },
      recruNum: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      signedNum: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      content: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      actBegin: {
        type: Sequelize.DATE
      },
      actEnd: {
        type: Sequelize.DATE
      },    
      place_do: {
        type:Sequelize.STRING(10)
      },
      place_si: {
        type:Sequelize.STRING(10)
      },
      actSubject: {
        type:Sequelize.ENUM(...Object.values(ActSubject)),
      },
      actType: {
        type:Sequelize.ENUM(...Object.values(ActType)),
      },
      isOnline: {
        type:Sequelize.ENUM(...Object.values(IsOnline)),
      },
      confirmType: {
        type: Sequelize.ENUM(...Object.values(ConfirmType)),
      },
      actField: {
        type: Sequelize.STRING(6)
      },
      actFieldDetail: {
        type: Sequelize.STRING(6)
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