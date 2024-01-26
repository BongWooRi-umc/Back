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
      // define association here
    }
  }
  Article.init({
    id: DataTypes.INTEGER,
    userid: DataTypes.STRING,
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    likes: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    modifiedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};