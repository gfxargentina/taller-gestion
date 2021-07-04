const { Schema, model } = require('mongoose');

const ClienteSchema = Schema({
    dni: {
        type: Number,
        required: true,
        unique: true
    },
    nombreApellido: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true,
    },
    email: {
        type: String
    },
    domicilio: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now
    },
    aparatos: [{
        type: Schema.Types.ObjectId,
        ref: 'Aparato'
    }
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
    }
    

});

//quitar __v, _id de la vista JSON, esto no afecta a la bd
ClienteSchema.method( 'toJSON', function() {
    //con this.toObject tiene acceso a cada una de las propiedades de ClienteSchema,
    //con la desestruturacion quitamos lo que no queremos que aparezca de la peticion
    const { __v, _id, ...object } = this.toObject();
    //cambiamos _id por id
    object.id = _id;
    //retornamos el objeto nuevo con los cambios
    return object;
})

module.exports = model('Cliente', ClienteSchema );