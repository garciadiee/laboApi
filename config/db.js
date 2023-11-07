const {Sequelize} = require('sequelize')
const sequelize = new Sequelize(
    'socialize',
    'root',
    '',
    {
        host: "localhost",
        dialect: 'mysql'
    }
)

module.exports = sequelize;

//aca no es recomedable poner la informacion, sino en el archivo config, por seguridad