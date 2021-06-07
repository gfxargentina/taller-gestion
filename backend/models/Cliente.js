const { Schema, model } = require('mongoose');

const ClienteSchema = Schema({
    dni: {
        type: Number,
        require: true
    },
    nombe: {
        type: String,
        require: true
    },
    apellido: {
        type: String,
        require: true
    },
    telefono: {
        type: Number,
        require: true
    },
    email: {
        type: String
    },
    domicilio: {
        type: String,
        require: true
    },
    fecha: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
    

});

module.exports = model('Cliente', ClienteSchema );