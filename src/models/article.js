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
      Article.belongsTo(models.User, { foreignKey: "userid", targetKey: "id" });
      Article.hasMany(models.Scrap_article, { foreignKey: "articleId", sourceKey: "id" });
      Article.hasMany(models.ArticleComment, { foreignKey: "articleId", sourceKey: "id" });

    }
  }
  Article.init({
    userId: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    title: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    content: {
      type:DataTypes.TEXT,
      allowNull:false,
    },
    likes: DataTypes.INTEGER,
    createdAt: {
      type:DataTypes.DATE,
      allowNull:false,
    },
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};