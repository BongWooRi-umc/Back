'use strict';
const {ApplyStatus} = require('../enums/applyStatus');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserApply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserApply.belongsTo(models.Activity, { foreignKey: "ActId", targetKey: "id" });
      UserApply.belongsTo(models.User, { foreignKey: "UserId", targetKey: "id" });

    }
  }
  UserApply.init({
    applyStatus: {
      type: DataTypes.ENUM(...Object.values(ApplyStatus)),
    },
  }, {
    sequelize,
    underscored:false,
    modelName: 'UserApply',
  });
  return UserApply;
};