/*
    ruta Aparatos
    /aparatos
*/

const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const { nuevoAparato, getAparatos } = require('../controllers/aparatos');
const { validarJWT } = require('../middlewares/validar-jwt');

//validar todas las rutas con el middleware JWT
router.use( validarJWT );

//TODO: el check
router.post('/:id', nuevoAparato);
router.get('/', getAparatos );


module.exports = router;





