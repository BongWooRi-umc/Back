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
      Org.hasMany(models.Activity, { foreignKey: "orgId", sourceKey: "id" });
    }
  }
  Org.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    url: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    tel: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    location: {
      type:DataTypes.STRING,
      allowNull:false,
    },
  }, {
    timestamps : true,
    sequelize,
    modelName: 'Org',
  });
  return Org;
};