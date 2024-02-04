'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LikeArticle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.LikeArticle.belongsTo(models.User, { ForeignKey: 'UserId', targetKey: 'id' });
      models.LikeArticle.belongsTo(models.Article, { ForeignKey: 'ArticleId', targetKey: 'id' });
      // define association here
    }
  }
  LikeArticle.init({
  }, {
    sequelize,
    timestamps:false,
    // underscored:false,
    modelName: 'LikeArticle',
  });
  return LikeArticle;
};