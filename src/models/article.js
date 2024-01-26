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
      id: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false,
      autoIncrement:true,
    },
    userid: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    title: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    content: DataTypes.TEXT,
    likes: DataTypes.INTEGER,
    createdAt: {
      type:DataTypes.DATE,
      allowNull:false,
    },
    modifiedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};