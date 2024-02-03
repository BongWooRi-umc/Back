'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Article, { foreignKey: "userId", sourceKey: "id" });
      User.hasMany(models.ArticleComment, { foreignKey: "userId", sourceKey: "id" });
      User.hasMany(models.ScrapCommu, { foreignKey: "userId", sourceKey: "id" });
      User.hasMany(models.LikeArticle, { foreignKey: "userId", sourceKey: "id" });
      User.hasMany(models.LikeReview, { foreignKey: "userId", sourceKey: "id" });
      User.hasMany(models.Review, { foreignKey: "userId", sourceKey: "id" });
      User.hasMany(models.UserAct, { foreignKey: "userId", sourceKey: "id" });
      User.hasMany(models.ScrapActivity, { foreignKey: "userId", sourceKey: "id" });
      User.hasMany(models.UserApply, { foreignKey: "userId", sourceKey: "id" });

    }
  }
  User.init({
    logInId: {
      type:DataTypes.STRING(20),
      allowNull:false,
    },
    name: {
      type:DataTypes.STRING(10),
      allowNull:false,
    },
    phone: {
      type:DataTypes.STRING(15),
      allowNull:false,
    },
    email: {
      type:DataTypes.STRING(64),
      allowNull:false,
    },
    nickname: {
      type:DataTypes.STRING(16),
      allowNull:false,
    },
    password: {
      type:DataTypes.STRING(20),
      allowNull:false,
    },
  }, {
    sequelize,
    underscored:false,
    charset:'utf8',
    collate:'utf8_general_ci',
    modelName: 'User',
  });
  return User;
};