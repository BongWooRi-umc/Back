'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Article.belongsTo(models.User, { foreignKey: "userId", targetKey: "id" });
      models.Article.hasMany(models.like, {foreignKey : "articleId" , sourceKey : "id"})
      models.Article.hasMany(models.Scrap_article, { foreignKey: "articleId", sourceKey: "id" });
      models.Article.hasMany(models.ArticleComment, { foreignKey: "articleId", sourceKey: "id" });

    }
  }
  Article.init({
    title: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    content: {
      type:DataTypes.TEXT,
      allowNull:false,
    },
    likes: DataTypes.INTEGER,
  }, {
    timestamps : true,
    sequelize,
    modelName: 'Article',
  });
  return Article;
};