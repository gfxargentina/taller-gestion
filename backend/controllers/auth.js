const {response} = require('express');

const crearUsuario = (req, res = response ) => {
        //console.log(req.body);

        const { nombre, email, password } = req.body;

    res.json({
        ok:true,
        msg: 'registro',
        nombre, 
        email, 
        password
    })
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