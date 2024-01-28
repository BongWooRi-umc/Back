'use strict';
const { Days } = require('../enums/days');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ActDay extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ActDay.init({
    actId: DataTypes.INTEGER,
    day: {
      type: DataTypes.ENUM(...Object.values(Days)),
    }
  }, {
    sequelize,
    modelName: 'ActDay',
  });
  return ActDay;
};