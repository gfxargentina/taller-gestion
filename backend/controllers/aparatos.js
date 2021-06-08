const { response } = require('express');
const Aparato = require('../models/Aparato');


//ingresar nuevo aparato
const nuevoAparato = async( req, res = response ) => {
    //console.log(req.body)

    const aparato = new Aparato(req.body);
    //console.log(aparato)

    try {
        aparato.cliente = req.uid;
        const aparatoGuardado = await aparato.save();

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



module.exports = {
    nuevoAparato
}