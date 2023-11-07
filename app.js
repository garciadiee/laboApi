const express = require('express')

const app = express()

const sequelize = require('./config/db')

const userRoutes = require('./routes/user')
const postRoutes = require('./routes/post')

const cors = require('cors')

const morgan = require('morgan')

// config de la DB
sequelize.authenticate()
.then(()=>{
    console.log('Conexion exitosa a la BD')
})
.catch((error)=>{
    console.log('error al conectar con la BD', error)
})

//middlewares (serializacion de informacion a json)
app.use(express.json())
app.use(cors());
app.use(morgan());

//config de rutas
app.use('/api', userRoutes);
app.use('/api', postRoutes);
//http://localhost:3000/api/...

// iniciar el servidor
const PORT = 3000;
app.listen(PORT, ()=>console.log(`Servidor corriendo en puerto ${PORT}`))

