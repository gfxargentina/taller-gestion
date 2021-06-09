const { response } = require('express');
const Cliente = require('../models/Cliente');


//obtener todos los clientes
const getClientes = async( req, res = response ) => {

    //busca todos los clientes con aparatos
    const clientes = await Cliente.find({}).populate('aparatos', 'fechaEntrada fechaSalida aparato presupuesto garantia')

    res.status(200).json({
        ok: true,
        msg: 'Devuelve todos los clientes y sus aparatos',
        clientes
    })
}

//crear cliente
const crearCliente = async( req, res = response ) => {
    //verificar que llega el cliente del req
    //console.log(req.body);

    const cliente = new Cliente( req.body );

    try {

        cliente.user = req.uid;
        const clienteGuardado = await cliente.save();

        res.status(201).json({
            ok: true,
            msg: 'Cliente guardado en la db',
            cliente: clienteGuardado
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
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