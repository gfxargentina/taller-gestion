/*
    ruta Aparatos
    /aparatos
*/

const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const { nuevoAparato } = require('../controllers/aparatos');
const { validarJWT } = require('../middlewares/validar-jwt');

//validar todas las rutas con el middleware JWT
router.use( validarJWT );

//TODO: el check
router.post('/nuevo', nuevoAparato);


module.exports = router;





