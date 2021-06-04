/*
    Rutas de Usuario / Auth
    host + /auth
*/

const { Router } = require('express');
const router = Router();

const { crearUsuario, login, revalidarToken } = require('../controllers/auth');



//ruta endpoint nuevo usuario
router.post('/new', crearUsuario );

//ruta endpoint Login
router.post('/', login );

//ruta endpoint revalidar token
router.get('/renew', revalidarToken );

module.exports = router;

