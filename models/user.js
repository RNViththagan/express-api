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
        static associate({Post}) {
            // define association here
            this.hasMany(Post, {foreignKey: 'userId', as: 'posts'})
        }

        // toJSON() {
        //     return {...this.get(), id: undefined};
        // }
    };
    User.init({
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notNull: {msg: 'User must have a name'},
                notEmpty: {msg: 'Name must not be empty'}
            }
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notNull: {msg: 'User must have a email'},
                notEmpty: {msg: 'Email must not be empty'},
                isEmail: {msg: 'Must be a valid email address'}
            }
        },
        role: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notNull: {msg: 'User must have a role'},
                notEmpty: {msg: 'Role must not be empty'}
            }
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        }
    }, {
        sequelize,
        tableName: 'users',
        modelName: 'User',
    });
    return User;
};