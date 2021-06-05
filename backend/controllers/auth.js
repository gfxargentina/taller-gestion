const {response} = require('express');
bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');




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

            //generar JWT
            const token = await generarJWT( usuario.id, usuario.nombre );

            res.status(201).json({
                ok:true,
                msg: 'registro exitoso',
                uid: usuario.id,
                nombre: usuario.nombre,
                token

               
            })

        } catch (error) {
            console.log(error);
            res.status(500).json({
                ok: false,
                msg: 'El nombre de usuario o contraseña esta mal, porfavor comuniquese con el administrador'
            })
            
        }

   
}

const login = async(req, res = response) => {

    const { email, password } = req.body

    try {
        //busca en la bd si hay un usuario con el mismo email
        const usuario = await Usuario.findOne({ email });
        //si no existe un usuario con el mismo email tira un error
        if( !usuario ) {
            return res.status(400).json({ 
                ok: false,
                msg: 'No existe ningun usuario con ese email'
            })
        }
        //confirmar los passwords
        const validarPassword = bcrypt.compareSync( password, usuario.password );

        //si no es el mismo password tira error
        if ( !validarPassword ) {
            return res.status(400).json({
                ok:false,
                msg: 'Password incorrecto'
            })
        }
        //generar JWT
        const token = await generarJWT( usuario.id, usuario.nombre );

        res.json({
            ok: true,
            uid: usuario.id,
            name: usuario.nombre,
            token
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Porfavor hable con el administrador'
        })
    }
}


const revalidarToken = async(req, res = response) => {

    const { uid, nombre } = req;
    

     //generar JWT
     const token = await generarJWT( uid, nombre );


    res.json({
        ok:true,
        uid,
        nombre,        
        token
        
    })
}

module.exports = {
    crearUsuario,
    login,
    revalidarToken
}