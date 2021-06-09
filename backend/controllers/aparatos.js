const { response } = require('express');
const Aparato = require('../models/Aparato');
const Cliente = require('../models/Cliente');




//ingresar nuevo aparato
const nuevoAparato = async( req, res = response ) => {
    //console.log(req.body)
    //console.log(res)

    const aparato = new Aparato(req.body);
        

    try {
        
         //trae el id del cliente y lo guarda en la coleccion aparato 
         aparato.cliente = req.params.id;
         //console.log(req.params.id)
          const aparatoGuardado = await aparato.save();
          
          //actualiza el cliente con el nuevo aparato ingresado
         const id = req.params.id;
         await Cliente.findByIdAndUpdate(id, { $push: { aparatos: aparatoGuardado._id } } );
               
         

          res.status(201).json({
            ok: true,
            msg: 'Aparato guardado',
            aparato: aparatoGuardado,
            
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

     const aparatos = await Aparato.find();

    

    res.status(200).json({
        ok: true,
        aparatos
    })
}



module.exports = {
    nuevoAparato,
    getAparatos
}