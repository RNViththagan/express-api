'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Comment.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      isInt:true,
      validate: {
        notNull: { msg: 'userID cannot be null' },
        notEmpty: { msg: 'userID must not be empty' },
        isInt: {
          msg: "Must be an integer number"
        }
      }
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: { msg: 'Comment cannot be null' },
        notEmpty: { msg: 'Comment must not be empty' }
      }
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      isInt:true,
      validate: {
        notNull: { msg: 'Comment cannot be null' },
        notEmpty: { msg: 'Comment must not be empty' },
        isInt: {
          msg: "Must be an integer number"
        }
      }
    }
  }, {
    sequelize,
    tableName: 'comments',
    modelName: 'Comment',
  });
  return Comment;
};