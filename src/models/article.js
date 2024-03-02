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
      models.Article.belongsTo(models.User, { foreignKey: 'UserId', targetKey: 'id' });
      models.Article.hasMany(models.ScrapCommu, { foreignKey: 'ArticleId', sourceKey: 'id' });
      models.Article.hasMany(models.ArticleComment, { foreignKey: 'ArticleId', sourceKey: 'id' });
      models.Article.hasMany(models.LikeArticle, { foreignKey: 'ArticleId', sourceKey: 'id' });

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
    scrapCount: {
      type:DataTypes.INTEGER,
      defaultValue:0,
    },
    viewCount: {
      type:DataTypes.INTEGER,
      defaultValue:0,
    },
    comments: {
      type:DataTypes.INTEGER,
      defaultValue:0,
    },
  }, {
    sequelize,
    // underscored:false,
    charset:'utf8',
    collate:'utf8_general_ci',
    modelName: 'Article',
  });
  return Article;
};