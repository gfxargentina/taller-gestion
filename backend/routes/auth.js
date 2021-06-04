/*
    Rutas de Usuario / Auth
    host + /auth
*/

const { Router } = require('express');
const router = Router();


const { crearUsuario, login, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { check } = require('express-validator');



//ruta endpoint nuevo usuario
router.post('/new',
              [//middlewares
                check('nombre', 'El nombre es obligatorio').not().isEmpty(),
                check('email', 'El email es obligatorio').isEmail(),
                check('password', 'El password debe de tener 8 caracteres como minimo').isLength({ min: 8}),
                validarCampos

              ], crearUsuario );

//ruta endpoint Login
router.post('/', 
            [
                check('email', 'El email es obligatorio').isEmail(),
                check('password', 'El password es obligatorio').not().isEmpty(),
                validarCampos
                
            ], login );

//ruta endpoint revalidar token
router.get('/renew', revalidarToken );

module.exports = router;

