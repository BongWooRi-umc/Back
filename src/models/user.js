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
      User.hasMany(models.Article, { foreignKey: "UserId", sourceKey: "id" });
      User.hasMany(models.ArticleComment, { foreignKey: "UserId", sourceKey: "id" });
      User.hasMany(models.ScrapCommu, { foreignKey: "UserId", sourceKey: "id" });
      User.hasMany(models.LikeArticle, { foreignKey: "UserId", sourceKey: "id" });
      User.hasMany(models.LikeReview, { foreignKey: "UserId", sourceKey: "id" });
      User.hasMany(models.Review, { foreignKey: "UserId", sourceKey: "id" });
      User.hasMany(models.UserAct, { foreignKey: "UserId", sourceKey: "id" });
      User.hasMany(models.ScrapActivity, { foreignKey: "UserId", sourceKey: "id" });
      User.hasMany(models.UserApply, { foreignKey: "UserId", sourceKey: "id" });

    }
  }
  User.init({
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
    timestamps: true,
    underscored:false,
    charset:'utf8',
    collate:'utf8_general_ci',
    modelName: 'User',
  });
  return User;
};