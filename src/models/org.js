'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Org extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Org.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    tel: DataTypes.STRING,
    location: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    modifiedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Org',
  });
  return Org;
};