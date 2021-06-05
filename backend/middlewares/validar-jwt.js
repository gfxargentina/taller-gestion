const { response } = require('express');
const jwt = require('jsonwebtoken');


const validarJWT = ( req, res = response, next ) => {

    //x-token headers
    const token = req.header('x-token');
    

    if( !token ) {
        return res.status(401).json({ 
            ok: false,
            msg: 'No hay un token en la peticion'
        });
    }

    try {
        const payload = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        );

        //console.log(payload)

         req.uid = payload.uid;
         req.nombre = payload.name;

    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no valido'
        })
        
    }
    

    next();

}

module.exports = { validarJWT };