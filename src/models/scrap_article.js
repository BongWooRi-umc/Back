'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Scrap_article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Scrap_article.belongsTo(models.Article, { foreignKey: "articleId", targetKey: "id" });
      Scrap_article.belongsTo(models.User, { foreignKey: "userid", targetKey: "id" });

    }
  }
  Scrap_article.init({
      id: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false,
      autoIncrement:true,
    },
    userid: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    articleId: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
  }, {
    sequelize,
    modelName: 'Scrap_article',
  });
  return Scrap_article;
};