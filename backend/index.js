const express = require('express');
require('dotenv').config();



//crear el servidor express
const app = express();

//directorio publico
app.use( express.static('public') );

//lectura y parseo del body 
app.use( express.json() );

//rutas 
app.use('/auth', require('./routes/auth') );



//escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${ process.env.PORT }`);
})

