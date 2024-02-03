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
      models.ArticleComment.belongsTo(models.Article, { foreignKey: 'articleId', targetKey: 'id'});
      models.ArticleComment.belongsTo(models.User, {foreignKey: 'userId', targetKey: 'id', });
    }
  }
  ArticleComment.init({
    content: {
      type:DataTypes.TEXT,
      allowNull:false,
    },
  }, {
    sequelize,
    underscored:false,
    charset:'utf8',
    collate:'utf8_general_ci',
    modelName: 'ArticleComment',
  });
  return ArticleComment;
};