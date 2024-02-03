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
      type:DataTypes.STRING(64),
      allowNull:false,
    },
    url: {
      type:DataTypes.STRING(256),
      allowNull:false,
    },
    tel: {
      type:DataTypes.STRING(15),
      allowNull:false,
    },
    address: {
      type:DataTypes.STRING(50),
      allowNull:false,
    },
  }, {
    sequelize,
    underscored:false,
    charset:'utf8',
    collate:'utf8_general_ci',
    modelName: 'Org',
  });
  return Org;
};