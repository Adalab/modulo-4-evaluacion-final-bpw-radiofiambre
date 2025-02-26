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


// FUNCIÓN DE CONEXIÓN A LA BD
async function connectToDB() {
    const connection = await mysql.createConnection({
        host: process.env.HOST_DV,
        user: process.env.USER_DB,
        password: process.env.PWD_DB,
        database: process.env.DATABASE,
        port: process.env.PORT
    });
    await connection.connect();
    return connection;
}


// CREAR EL PUERTO Y LE DECIMOS AL SERVIDOR QUE ESCUCHE A TRAVÉS DE ÉL
const PORT = 4500;
server.listen(PORT, () => {
    console.log(`Server is cooking at http:localhost:${PORT}`);
});


// CREAR RECETA
server.get('/allrecipes', async (req, res) => {
    try {
        const connection = await connectToDB();
        const selectAllRecipes = 'SELECT * FROM cookbook_db.recipes';
        const [result] = await connection.query(selectAllRecipes);
        connection.end();

        if (result.length === 0) {
            res.status(404).json({
                status: 'Error',
                message: 'No se han encontrado recetas'
            });
        } else {
            res.status(200).json({
                status: 'Success',
                info: {
                    recipeCount: result.length
                },
                message: result
            });
        }
        
    } catch (error) {
        res.status(500).json({
            status: 'Error',
            message: error
        });
    }
});


// LEER RECETA


// MODIFICAR RECETA


// ELIMINAR RECETA