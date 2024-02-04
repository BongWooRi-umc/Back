'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LikeReview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.LikeReview.belongsTo(models.User, { ForeignKey: "UserId", SourceKey: "id" });
      models.LikeReview.belongsTo(models.Review, {ForeignKey: "ReviewId", SourceKey: "id" });
      // define association here
    }
  }
  LikeReview.init({
  }, {
    sequelize,
    timestamps:false,
    underscored:false,
    modelName: 'LikeReview',
  });
  return LikeReview;
};