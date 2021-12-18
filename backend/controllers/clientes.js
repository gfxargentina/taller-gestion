const { response } = require("express");
const Cliente = require("../models/Cliente");

//obtener todos los clientes
const getClientes = async (req, res = response) => {
  //busca todos los clientes con aparatos
  const clientes = await Cliente.find({})
    .populate(
      "aparatos",
      "fechaEntrada fechaSalida aparato falla presupuesto observaciones precio estado garantia"
    )
    .sort([["fecha", -1]]);

  res.status(200).json({
    ok: true,
    msg: "Devuelve todos los clientes y sus aparatos",
    clientes,
  });
};

//crear cliente
const crearCliente = async (req, res = response) => {
  //verificar que llega el cliente del req
  //console.log(req.body);

  const cliente = new Cliente(req.body);

  try {
    cliente.user = req.uid;
    const clienteGuardado = await cliente.save();

    res.status(201).json({
      ok: true,
      msg: "Cliente guardado en la db",
      cliente: clienteGuardado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

//actualizar cliente
const actualizarCliente = async (req, res = response) => {
  const clienteId = req.params.id;
  const uid = req.uid;

  try {
    //busca el cliente en la db
    const cliente = await Cliente.findById(clienteId);

    if (!cliente) {
      res.status(404).json({
        ok: false,
        msg: "No existe ningun cliente con ese id",
      });
    }
    //verificar que sea el mismo usuario el que quiere realizar los cambios
    if (cliente.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "No esta autorizado a editar este cliente",
      });
    }

    const clienteEditado = {
      ...req.body,
      user: uid,
    };

    //busca el cliente para actualizar, findByIdUpdate recibe el id, los nuevos datos, y
    //devuelve el nuevo cliente actualizado con new: true en la response
    const clienteActualizado = await Cliente.findByIdAndUpdate(
      clienteId,
      clienteEditado,
      { new: true }
    );
    res.json({
      ok: true,
      clienteActualizado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

//eliminar cliente
const eliminarCliente = async (req, res = response) => {
  const clienteId = req.params.id;
  const uid = req.uid;

  try {
    //busca el cliente en la db
    const cliente = await Cliente.findById(clienteId);

    if (!cliente) {
      res.status(404).json({
        ok: false,
        msg: "No existe ningun cliente con ese id",
      });
    }
    //verificar que sea el mismo usuario el que quiere realizar los cambios
    if (cliente.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "No esta autorizado a eliminar este cliente",
      });
    }

    // Elimina el cliente
    await Cliente.findByIdAndDelete(clienteId);
    res.json({
      ok: true,
      msg: "Cliente eliminado",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

module.exports = {
  getClientes,
  crearCliente,
  actualizarCliente,
  eliminarCliente,
};
