'use strict';
const { ActSubject } = require('../enums/actSubject');
const { ActType } = require('../enums/actType');
const { IsOnline } = require('../enums/isOnline');
const { ConfirmType } = require('../enums/confirmType');
const {
  Model, STRING
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Activity.belongsTo(models.Org, { foreignKey: "orgId", targetKey: "id" });
      Activity.hasMany(models.review, { foreignKey: "actId", sourceKey: "id" });
      Activity.belongsToMany(models.User, { through : 'userAct' });
      Activity.hasMany(models.Scrap_activity, { foreignKey: "actId", sourceKey: "id" });
      Activity.hasMany(models.ActDay, { foreignKey: "actId", sourceKey: "id" });
    }
  }
  Activity.init({
    id: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false,
      autoIncrement:true,
    },
    title: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    recruBegin: {
      type:DataTypes.DATE,
      allowNull:false,
    },
    recruEnd: {
      type:DataTypes.DATE,
      allowNull:false,
    },
    recruNum: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    signedNum: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    content: DataTypes.TEXT,
    actBegin: {
      type:DataTypes.DATE,
      allowNull:false,
    },
    actEnd: {
      type:DataTypes.DATE,
      allowNull:false,
    },
    place_do: {
      type:DataTypes.STRING,
    },
    place_si: {
      type:DataTypes.STRING,
    },
    actSubject: {
      type:DataTypes.ENUM(...Object.values(ActSubject)),
    },
    actType: {
      type:DataTypes.ENUM(...Object.values(ActType)),
    },
    isOnline: {
      type:DataTypes.ENUM(...Object.values(IsOnline)),
    },
    confirmType: {
      type: DataTypes.ENUM(...Object.values(ConfirmType)),
    },
    actField: {
      type: DataTypes.STRING,
    },
    actFieldDetail: {
      type: DataTypes.STRING,
    },
  }, {
    timestamps : true,
    sequelize,
    modelName: 'Activity',
  });
  return Activity;
};