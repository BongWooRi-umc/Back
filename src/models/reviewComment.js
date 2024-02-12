'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReviewComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.ReviewComment.belongsTo(models.User, {foreignKey: 'UserId', targetKey: 'id', });
      models.ReviewComment.belongsTo(models.Review, { foreignKey: 'ReviewId', targetKey: 'id'});
    }
  }
  ReviewComment.init({
    content: {
      type:DataTypes.TEXT,
      allowNull:false,
    },
  }, {
    sequelize,
    underscored:false,
    charset:'utf8',
    collate:'utf8_general_ci',
    modelName: 'ReviewComment',
  });
  return ReviewComment;
};