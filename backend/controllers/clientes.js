const { response } = require('express');

//obtener todos los clientes
const getClientes = ( req, res = response ) => {

    res.status(200).json({
        ok: true,
        msg: 'Devuelve todos los clientes'
    })
}

//crear cliente
const crearCliente = ( req, res = response ) => {

    res.status(200).json({
        ok: true,
        msg: 'Crear Cliente'
    })
}

//actualizar cliente
const actualizarCliente = ( req, res = response ) => {

    res.status(200).json({
        ok: true,
        msg: 'actualizar Cliente'
    })
}

//eliminar cliente
const eliminarCliente = ( req, res = response ) => {

    res.status(200).json({
        ok: true,
        msg: 'Eliminar Cliente'
    })
}



module.exports = { 
    getClientes,
    crearCliente,
    actualizarCliente,
    eliminarCliente
}