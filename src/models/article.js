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
      models.Article.belongsTo(models.User, { foreignKey: 'userId', targetKey: 'id' });
      models.Article.hasMany(models.ScrapCommu, { foreignKey: 'articleId', sourceKey: 'id' });
      models.Article.hasMany(models.ArticleComment, { foreignKey: 'articleId', sourceKey: 'id' });
      models. Article.hasMany(models.LikeArticle, { foreignKey: 'articleId', sourceKey: 'id' });

    }
  }
  Article.init({
    title: {
      type:DataTypes.STRING(128),
      allowNull:false,
    },
    content: {
      type:DataTypes.TEXT,
      allowNull:false,
    },
    likes: {
      type:DataTypes.INTEGER,
      defaultValue:0,
    },
    viewCount: {
      type:DataTypes.INTEGER,
    },
  }, {
    sequelize,
    underscored:false,
    charset:'utf8',
    collate:'utf8_general_ci',
    modelName: 'Article',
  });
  return Article;
};