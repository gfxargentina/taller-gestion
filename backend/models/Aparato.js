const { Schema, model } = require('mongoose');

const AparatoSchema = Schema({
    fechaEntrada: {
        type: Date
    },
    fechaSalida: {
        type: Date
    },
    aparato: {
        type: String,
        require: true
    },
    falla: {
        type: String
    },
    presupuesto: {
        type: String
    },
    garantia: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente'
    }

});

module.exports = model('Aparato', AparatoSchema );