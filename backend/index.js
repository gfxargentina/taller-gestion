const express = require('express');
const { dbConection } = require('./db/config');
require('dotenv').config();
const cors = require('cors');



//crear el servidor express
const app = express();

//DB
dbConection();

//CORS  
app.use( cors() );




//directorio publico
app.use( express.static('public') );

//lectura y parseo del body 
app.use( express.json() );

//rutas 
app.use('/auth', require('./routes/auth') );
app.use('/clientes', require('./routes/clientes') );



//escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${ process.env.PORT }`);
})

