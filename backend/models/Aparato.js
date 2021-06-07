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
        required: true
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
        ref: 'Cliente', 
        required:true
    }

});

module.exports = model('Aparato', AparatoSchema );