require('dotenv').config();

const express = require('express'); // mean_user - geYnUUUaar6NtJPp
const cors = require('cors')

const { dbConnection } = require('./database/config');

// Crear el servidor de Express
const app = express();

// Configurar Cors
app.use(cors());

// Lectura y Parseo del body
app.use(express.json());

// Base de Datos
dbConnection();

// Rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/login', require('./routes/auth'));


app.listen(process.env.PORT, () => {
    console.log("Servidor Corriendo en el puerto " + process.env.PORT);
});