'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserAct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserAct.init({
    id: DataTypes.INTEGER,
    userid: DataTypes.STRING,
    activityId: DataTypes.INTEGER,
    isFinished: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'UserAct',
  });
  return UserAct;
};