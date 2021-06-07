/*
    ruta clientes
    /clientes
*/

const { Router } = require('express');
const router = Router();


const { getClientes, crearCliente, actualizarCliente, eliminarCliente } = require('../controllers/clientes');
const { validarJWT } = require('../middlewares/validar-jwt');

//validar todas las rutas con el middleware JWT
router.use( validarJWT );


//obtener clientes 
router.get('/', getClientes );

//crear un nuevo cliente
router.post('/', crearCliente );

//actualizar cliente
router.put('/:id', actualizarCliente );

//borrar cliente
router.delete('/:id', eliminarCliente );

module.exports = router;