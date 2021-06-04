const {response} = require('express');
const Usuario = require('../models/Usuario');


const crearUsuario = async(req, res = response ) => {
        //console.log(req.body);

        const { nombre, email, password } = req.body;


        try {
            const usuario = new Usuario( req.body );
            await usuario.save();

            res.status(201).json({
                ok:true,
                msg: 'registro exitoso',
                nombre, 
                email, 
                password
            })

        } catch (error) {
            console.log(error);
            res.status(500).json({
                ok: false,
                msg: 'El nombre de usuario o contraseña esta mal, porfavor comuniquese con el administrador'
            })
            
        }

   
}

const login = (req, res = response) => {

    const { email, password } = req.body

    res.json({
        ok:true,
        msg: 'Login',
        email,
        password
    })
}


const revalidarToken = (req, res = response) => {



    res.json({
        ok:true,
        msg: 'renew'
    })
}

module.exports = {
    crearUsuario,
    login,
    revalidarToken
}