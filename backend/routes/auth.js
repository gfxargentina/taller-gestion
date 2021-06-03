/*
    Rutas de Usuario / Auth
    host + /auth
*/

const { Router } = require('express');
const router = Router();


router.get('/', (req, res) => {
    res.json({
        ok:true
    })
});


module.exports = router;

