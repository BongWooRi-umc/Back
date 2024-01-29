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
      ActDay.belongsTo(models.Activity, { foreignKey:"actId" , targetKey:"id"});
    }
  }
  ActDay.init({
    day: {
      type: DataTypes.ENUM(...Object.values(Days)),
    }
  }, {
    sequelize,
    modelName: 'ActDay',
  });
  return ActDay;
};