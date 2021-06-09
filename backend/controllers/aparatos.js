const { response } = require('express');
const Aparato = require('../models/Aparato');
const Cliente = require('../models/Cliente');




//ingresar nuevo aparato
const nuevoAparato = async( req, res = response ) => {
    //console.log(req.body)
    //console.log(res)

    const aparato = new Aparato(req.body);
        

    try {
        //trae el id del cliente
         aparato.cliente = req.params.id;
        //console.log(req.params.id)
         const aparatoGuardado = await aparato.save();

        
         //TODO: como hacer que guarde el id del aparato en Clientes
         //cliente.aparatos = Cliente.aparatos.concat(aparatoGuardado._id);
         //await Cliente.save();
         

          res.status(201).json({
            ok: true,
            msg: 'Aparato guardado',
            aparato: aparatoGuardado
        })

        
    } catch (error) {
        console.log(error);
        res.status(500).json({ 
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

//obtener todos los aparatos
const getAparatos = async( req , res = response ) => {

     const aparatos = await Aparato.find()
                                   .populate('cliente', 'nombre apellido');

    

    res.status(200).json({
        ok: true,
        aparatos
    })
}



module.exports = {
    nuevoAparato,
    getAparatos
}