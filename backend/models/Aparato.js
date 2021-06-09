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
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente', 
    }

});


AparatoSchema.method( 'toJSON', function() {
    
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;    
    return object;
})

module.exports = model('Aparato', AparatoSchema );