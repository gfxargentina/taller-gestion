/*
    ruta Aparatos
    /aparatos
*/

const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const { nuevoAparato, getAparatos } = require('../controllers/aparatos');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

//validar todas las rutas con el middleware JWT
router.use( validarJWT );


router.post('/:id',[
    check('fechaEntrada', 'Debe ingresar la fecha de entrada del aparato').not().isEmpty(),
    check('aparato', 'Debe de ingresar el nombre y modelo del aparato').not().isEmpty(),
    check('falla', 'Debe ingresar la falla del aparato').not().isEmpty(),
    validarCampos

], nuevoAparato);

//obtener todos los aparatos por cliente
router.get('/', getAparatos );


module.exports = router;





