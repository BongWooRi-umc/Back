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
      User.hasMany(models.Review, { foreignKey: "userid", sourceKey: "id" });
      User.hasMany(models.UserAct, { foreignKey: "userid", sourceKey: "id" });
      User.hasMany(models.Scrap_activity, { foreignKey: "userid", sourceKey: "id" });
      User.hasMany(models.Scrap_article, { foreignKey: "userid", sourceKey: "id" });
      User.hasMany(models.Article, { foreignKey: "userid", sourceKey: "id" });

    }
  }
  User.init({
    id: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false,
      autoIncrement:true,
    },
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
    createdAt: {
      type:DataTypes.DATE,
      allowNull:false,
    },
    modifiedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};