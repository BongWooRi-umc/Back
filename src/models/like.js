'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Scrap_article.belongsTo(models.Article, { foreignKey: "articleId", targetKey: "id" });
      Scrap_article.belongsTo(models.User, { foreignKey: "userId", targetKey: "id" });
    }
  }
  Like.init({
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};