// INSTALACIÓN DE DEPENDENCIAS
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");


// CREACIÓN DEL SERVIDOR
const server = express();
require("dotenv").config();


// CONFIGURACIÓN DEL SERVIDOR
server.use(cors());
server.use(express.json());


// FUNCIÓN CONEXIÓN A LA BD
async function connectToDB() {
    const connection = await mysql.createConnection({
        host: process.env.HOST_DV,
        user: process.env.USER_DB,
        password: process.env.PWD_DB,
        database: process.env.DATABASE,
        port: process.env.PORT
    });
    await connection.connect();
    console.log(connection);
    return connection;
}


// CREAR EL PUERTO Y LE DECIMOS AL SERVIDOR QUE ESCUCHE A TRAVÉS DE ÉL
const PORT = 4500;
server.listen(PORT, () => {
    console.log(`Server is cooking at http:localhost:${PORT}`);
});