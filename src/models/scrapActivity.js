'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ScrapActivity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ScrapActivity.belongsTo(models.User, { foreignKey: "UserId", targetKey: "id" });
      ScrapActivity.belongsTo(models.Activity, { foreignKey: "ActId", targetKey: "id" });
    }
  }
  ScrapActivity.init({

  }, {
    sequelize,
    timestamps:false,
    underscored:false,
    modelName: 'ScrapActivity',
  });
  return ScrapActivity;
};