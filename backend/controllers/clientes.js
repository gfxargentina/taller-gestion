const { response } = require("express");
const Cliente = require("../models/Cliente");

//obtener todos los clientes
// const getClientes = async (req, res = response) => {
//   const page = parseInt(req.query.page || "0");
//   //regex para buscar todas las letras que esten al principio del campo nombreApellido
//   //const nombre = new RegExp("^" + req.query.nombre);
//   const nombre = req.query.nombre;
//   const pageSize = 10;
//   //para contar el numero de documentos de la bd
//   const total = await Cliente.countDocuments({});

//   //busca todos los clientes con aparatos
//   const clientes = await Cliente.find(
//     nombre ? { $text: { $search: nombre } } : {}
//   )
//     .sort([["fecha", -1]])
//     .skip(pageSize * page)
//     .limit(pageSize)
//     .populate(
//       "aparatos",
//       "fechaEntrada fechaSalida aparato falla presupuesto observaciones precio estado garantia"
//     );
//   //const clientes = await Cliente.find({
//   //$text: { $search: nombre },
//   //}).populate("aparatos");
//   res.status(200).json({
//     ok: true,
//     msg: "Devuelve todos los clientes y sus aparatos",
//     clientes,
//     //devuelve el total de paginas
//     totalPages: Math.ceil(total / pageSize),
//   });
// };

const getClientes = async (req, res = response) => {
  const page = parseInt(req.query.page || "0");
  const getNombre = req.query.nombre;
  const nombre = getNombre?.toLowerCase();
  const pageSize = 10;
  //para contar el numero de documentos de la bd
  const total = await Cliente.countDocuments({});

  try {
    if (nombre) {
      clientes = await Cliente.find(
        nombre ? { $text: { $search: nombre } } : {}
      )
        .sort([["fecha", -1]])
        .skip(pageSize * page)
        .limit(pageSize)
        .populate(
          "aparatos",
          "fechaEntrada fechaSalida aparato falla presupuesto observaciones precio estado garantia"
        );
      //const clientes = await Cliente.find({
      //$text: { $search: nombre },
      //}).populate("aparatos");
      res.status(200).json({
        ok: true,
        msg: "Devuelve todos los clientes y sus aparatos",
        clientes,
        //devuelve el total de paginas
        totalPages: Math.ceil(total / pageSize),
      });
    } else {
      const clientes = await Cliente.find({})
        .sort([["fecha", -1]])
        .skip(pageSize * page)
        .limit(pageSize)
        .populate(
          "aparatos",
          "fechaEntrada fechaSalida aparato falla presupuesto observaciones precio estado garantia"
        );
      //const clientes = await Cliente.find({
      //$text: { $search: nombre },
      //}).populate("aparatos");
      res.status(200).json({
        ok: true,
        msg: "Devuelve todos los clientes y sus aparatos",
        clientes,
        //devuelve el total de paginas
        totalPages: Math.ceil(total / pageSize),
      });
    }
  } catch (error) {
    console.log(error);
  }
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
