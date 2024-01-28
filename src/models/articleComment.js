'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ArticleComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ArticleComment.belongsTo(models.Article, { foreignKey: "articleId", targetKey: "id" });

    }
  }
  ArticleComment.init({
    articleId: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    userId: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    content: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'ArticleComment',
  });
  return ArticleComment;
};