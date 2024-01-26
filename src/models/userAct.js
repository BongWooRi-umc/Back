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
      id: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false,
      autoIncrement:true,
    },
    userid: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    activityId: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    isFinished: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'UserAct',
  });
  return UserAct;
};