const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

// create fields/columns for Post model
Post.init(
    {
        // unique post id
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // post title column
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // main body of post text column
        text: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        // connect user model to identify whos post this is
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;