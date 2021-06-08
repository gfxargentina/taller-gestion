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
        required:true
    }

});

//quitar __v, _id de la vista JSON, esto no afecta a la bd
AparatoSchema.method( 'toJSON', function() {
    //con this.toObject tiene acceso a cada una de las propiedades de ClienteSchema,
    //con la desestruturacion quitamos lo que no queremos que aparezca de la peticion
    const { __v, _id, ...object } = this.toObject();
    //cambiamos _id por id
    object.id = _id;
    //retornamos el objeto nuevo con los cambios
    return object;
})

module.exports = model('Aparato', AparatoSchema );