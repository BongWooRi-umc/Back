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
      UserAct.belongsTo(models.Activity, { foreignKey: "actId", targetKey: "id" });
      UserAct.belongsTo(models.User, { foreignKey: "userId", targetKey: "id" });
      UserAct.belongsTo(models.Review, { foreignKey: "reviewId", targetKey: "id" });

    }
  }
  UserAct.init({
    actDate: {
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    timestamps:false,
    underscored:false,
    modelName: 'UserAct',
  });
  return UserAct;
};