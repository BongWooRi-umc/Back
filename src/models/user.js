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
      User.hasMany(models.Review, { foreignKey: "userId", sourceKey: "id" });
      User.belongsToMany(models.Activity, { through : 'userAct'});
      User.hasMany(models.Scrap_activity, { foreignKey: "userId", sourceKey: "id" });
      User.hasMany(models.Scrap_article, { foreignKey: "userId", sourceKey: "id" });
      User.hasMany(models.like, { foreignKey: "userId", sourceKey: "id" });
      User.hasMany(models.Article, { foreignKey: "userId", sourceKey: "id" });

    }
  }
  User.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    phone: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    email: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    nickname: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    password: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    portrait : {
      type : DataTypes.STRING,
    }
  }, {
    timestamps : true,
    sequelize,
    modelName: 'User',
  });
  return User;
};