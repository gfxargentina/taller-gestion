const express = require('express');
require('dotenv').config();



//crear el servidor express
const app = express();

//directorio publico
app.use( express.static('public') );

//rutas 
// app.get('/', (req, res) => {
//     res.json({
//         ok: true
//     })
// })



//escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${ process.env.PORT }`);
})

