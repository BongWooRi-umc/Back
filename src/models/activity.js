'use strict';
const {
  Model
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
      Activity.hasMany(models.UserAct, { foreignKey: "acttivityId", sourceKey: "id" });
      Activity.hasMany(models.Scrap_activity, { foreignKey: "activityId", sourceKey: "id" });
    }
  }
  Activity.init({
    id: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false,
      autoIncrement:true,
    },
    orgId: DataTypes.INTEGER,
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
    createdAt: {
      type:DataTypes.DATE,
      allowNull:false,
    },
    modifiedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Activity',
  });
  return Activity;
};