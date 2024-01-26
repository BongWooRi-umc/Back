'use strict';
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
      // define association here
    }
  }
  Review.init({
    id: DataTypes.INTEGER,
    userid: DataTypes.STRING,
    actId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    score: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    modifiedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};