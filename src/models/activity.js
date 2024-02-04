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
      Activity.belongsTo(models.Org, { foreignKey: "OrgId", targetKey: "id" });
      Activity.hasMany(models.Review, { foreignKey: "ActId", sourceKey: "id" });
      Activity.hasMany(models.UserAct, { foreignKey: "ActId", sourceKey: "id" });
      Activity.hasMany(models.ScrapActivity, { foreignKey: "ActId", sourceKey: "id" });
      Activity.hasMany(models.UserApply, { foreignKey: "ActId", sourceKey: "id" });

    }
  }
  Activity.init({
    title: {
      type:DataTypes.STRING(128),
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
    actBegin: {
      type:DataTypes.DATE,
      allowNull:false,
    },
    actEnd: {
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
    content: {
      type:DataTypes.TEXT,
      allowNull:false,
    },
    place_do: {
      type:DataTypes.STRING(10),
    },
    place_si: {
      type:DataTypes.STRING(10),
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
      type: DataTypes.STRING(6),
    },
    actFieldDetail: {
      type: DataTypes.STRING(6),
    },
    isRecru: {
      type: DataTypes.BOOLEAN,
      defaultValue:false,
    },
    actDay: {
      type: DataTypes.STRING(7),
      defaultValue:"0000000", //일요일부터 시작, 0이면 활동X, 1이면 활동
    },
  }, {
    sequelize,
    underscored:false,
    modelName: 'Activity',
  });
  return Activity;
};