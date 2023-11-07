const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');


class Post extends Model { }

Post.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
        unique: false
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    ubicacion: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
    },
    userId:{
        type :DataTypes.INTEGER ,
        foreignKey: true,
        allowNull :false
    }

},
    {
        sequelize,
        modelName: 'Post'
    });


Post.sync()
    .then(() => {
        console.log('La tabla de Publicaciones ha sido creada');
    })
    .catch((error) => {
        console.error('Error al crear la tabla de Publicaciones: ', error);
    });

module.exports = Post;