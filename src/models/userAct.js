'use strict';
const {ApplyStatus} = require('../enums/applyStatus');
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
      
    }
  }
  UserAct.init({
    applyStatus: {
      type: DataTypes.ENUM(...Object.values(ApplyStatus)),
    },
    actTime : {
        type : DataTypes.DATE,
        allowNull : false,
    },
  }, {
    sequelize,
    modelName: 'UserAct',
  });
  return UserAct;
};