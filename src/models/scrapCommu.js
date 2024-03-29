'use strict';
const {ScrapType} = require('../enums/scrapType');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ScrapCommu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ScrapCommu.belongsTo(models.User, { foreignKey: "UserId", targetKey: "id" });
      ScrapCommu.belongsTo(models.Article, { foreignKey: "ArticleId", targetKey: "id" });
      ScrapCommu.belongsTo(models.Review, { foreignKey: "ReviewId", targetKey: "id" });

    }
  }
  ScrapCommu.init({
    scrapType: {
      type:DataTypes.ENUM(...Object.values(ScrapType)),
    },
    title:{
      type:DataTypes.STRING(128),
      allowNull:false,
    },
    context:{
      type:DataTypes.TEXT,
      allowNull:false,
    },
    likes:{
      type:DataTypes.INTEGER,
      defaultValue:0
    },
    comments:{
      type:DataTypes.INTEGER,
      defaultValue:0,
    },
    createdTime:{ //원글 작성일자
      type:DataTypes.DATE,
    },
  }, {
    sequelize,
    timestamps:false,
    underscored:false,
    modelName: 'ScrapCommu',
  });
  return ScrapCommu;
};