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
      Review.belongsTo(models.User, { foreignKey: "UserId", targetKey: "id" });
      Review.belongsTo(models.Activity, { foreignKey: "ActId", targetKey: "id" });
      Review.hasMany(models.LikeReview, { foreignKey: "ReviewId", sourceKey: "id" });
      Review.hasMany(models.ScrapCommu, { foreignKey: "ReviewId", sourceKey: "id" });
      Review.hasMany(models.ReviewComment, { foreignKey: "ReviewId", sourceKey: "id" });
      Review.hasOne(models.UserAct, { foreignKey: "ReviewId", sourceKey: "id" });
      Review.hasMany(models.ReviewComment, { foreignKey: "ReviewId", sourceKey: "id" });
      
    }
  }
  Review.init({
    actTitle: {
      type:DataTypes.STRING(128),
      allowNull:false,
    },
    actDate: {
      type:DataTypes.DATE,
      allowNull:false,
    },
    content: {
      type:DataTypes.TEXT,
      allowNull:false,
    },
    score: {
      type:DataTypes.ENUM(...Object.values(Score)),
    },
    scrapCount:{
      type:DataTypes.INTEGER,
      defaultValue:0,
    },
    viewCount:{
      type:DataTypes.INTEGER,
      defaultValue:0,
    },
    comments: {
      type:DataTypes.INTEGER,
      defaultValue:0,
    },
  }, {
    sequelize,
    underscored:false,
    charset:'utf8',
    collate:'utf8_general_ci',
    modelName: 'Review',
  });
  return Review;
};