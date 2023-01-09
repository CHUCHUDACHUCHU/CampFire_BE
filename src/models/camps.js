'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Camps extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.Hosts, { foreignKey: 'hostId' });
            this.hasMany(models.Books, {
                as: 'Books',
                foreignKey: 'campId',
            });
            this.hasMany(models.Sites, {
                as: 'Sites',
                foreignKey: 'campId',
            });
            this.hasMany(models.CampAmenities, {
                as: 'CampAmenities',
                foreignKey: 'campId',
            });
            this.hasMany(models.Envs, {
                as: 'Envs',
                foreignKey: 'campId',
            });
            this.hasMany(models.Types, {
                as: 'Types',
                foreignKey: 'campId',
            });
            this.hasMany(models.Themes, {
                as: 'Themes',
                foreignKey: 'campId',
            });
            this.hasMany(models.Likes, {
                as: 'Likes',
                foreignKey: 'campId',
            });
        }
    }
    Camps.init(
        {
            campId: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            hostId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Hosts',
                    key: 'hostId',
                },
                onDelete: 'cascade',
            },
            campName: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            campAddress: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            campMainImage: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            campSubImages: {
                type: DataTypes.STRING(2000),
                allowNull: false,
            },
            campDesc: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            checkIn: {
                type: DataTypes.TIME,
                allowNull: false,
            },
            checkOut: {
                type: DataTypes.TIME,
                allowNull: false,
            },
            likes: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
        },
        {
            sequelize,
            modelName: 'Camps',
        }
    );
    return Camps;
};
