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
      // define association here
    }
  }
  Scrap_activity.init({
    id: DataTypes.INTEGER,
    userid: DataTypes.STRING,
    activityId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Scrap_activity',
  });
  return Scrap_activity;
};