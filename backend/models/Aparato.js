const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const accesoriosSchema = new mongoose.Schema({
  value: { type: String },
  label: { type: String },
});

const AparatoSchema = Schema({
  fechaEntrada: {
    type: Date,
  },
  fechaSalida: {
    type: Date,
  },
  aparato: {
    type: String,
    required: true,
  },
  falla: {
    type: String,
  },
  presupuesto: {
    type: String,
  },
  precio: {
    type: String,
  },
  tecnico: {
    type: String,
    enum: ['JESUS', 'ALEJANDRO', 'BRUNO'],
    default: 'JESUS',
  },
  accesorios: [accesoriosSchema],
  observaciones: {
    type: String,
  },
  garantia: {
    type: String,
  },
  cliente: {
    type: Schema.Types.ObjectId,
    ref: 'Cliente',
  },
  estado: {
    type: String,
    enum: ['SIN REVISAR', 'REVISADO', 'ENTREGADO', 'DEVUELTO', 'TERMINADO'],
    default: 'SIN REVISAR',
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
  },
});

AparatoSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model('Aparato', AparatoSchema);
