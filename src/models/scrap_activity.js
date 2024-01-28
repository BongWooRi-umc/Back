'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Scrap_activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Scrap_activity.belongsTo(models.User, { foreignKey: "userid", targetKey: "id" });
      Scrap_activity.belongsTo(models.Activity, { foreignKey: "actId", targetKey: "id" });
    }
  }
  Scrap_activity.init({
    userid: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    activityId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Scrap_activity',
  });
  return Scrap_activity;
};