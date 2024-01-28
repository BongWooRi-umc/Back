'use strict';
const { Score } = require('../enums/score');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsTo(models.User, { foreignKey: "userid", targetKey: "id" });
      Review.belongsTo(models.Activity, { foreignKey: "actId", targetKey: "id" });

    }
  }
  Review.init({
    userId: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    actId: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    title: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    content: DataTypes.TEXT,
    score: DataTypes.ENUM(...Object.values(Score)),
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};