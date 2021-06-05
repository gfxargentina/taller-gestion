const {response} = require('express');
bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');



const crearUsuario = async(req, res = response ) => {
        //console.log(req.body);

        const { email, password } = req.body;


        try {

            //busca en la bd si hay un usuario con el mismo email
            let usuario = await Usuario.findOne({ email });
            //si hay un usuario con el mismo email tira un error
            if( usuario ) {
                return res.status(400).json({ 
                    ok: false,
                    msg: 'Un usuario ya existe con ese email'
                })
            }

            usuario = new Usuario( req.body );
            
            //encriptar contraseña
            const salt = bcrypt.genSaltSync();
            usuario.password = bcrypt.hashSync( password, salt);


            await usuario.save();

            res.status(201).json({
                ok:true,
                msg: 'registro exitoso',
                uid: usuario.id,
                nombre: usuario.nombre

               
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