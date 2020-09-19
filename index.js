require('dotenv').config();

const express = require('express'); // mean_user - geYnUUUaar6NtJPp
const cors = require('cors')

const { dbConnection } = require('./database/config');

// Crear el servidor de Express
const app = express();

// Configurar Cors
app.use(cors());

// Base de Datos
dbConnection();

// Rutas
app.get('/', (req, res) => {
    res.status(400).json({
        ok: true,
        msg: "Hola Mundo"
    })
});

app.listen(process.env.PORT, () => {
    console.log("Servidor Corriendo en el puerto " + process.env.PORT);
});