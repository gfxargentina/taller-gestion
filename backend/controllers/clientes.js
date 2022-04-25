const { response } = require("express");
const Cliente = require("../models/Cliente");

//Trae todos los clientes, manejar la paginacion en el cliente
// const getClientes = async (req, res = response) => {
//   try {
//     const { nombre } = req.query;
//     if (nombre) {
//       //mongodb atlas search
//       const agg = [
//         {
//           $search: {
//             autocomplete: {
//               query: nombre,
//               path: "nombreApellido",
//               fuzzy: { maxEdits: 2 },
//             },
//           },
//         },
//         {
//           $project: {
//             //para mostrar los datos de la coleccion, 1 para mostrar, 0 para no mostrarlo
//             _id: 1,
//             nombreApellido: 1,
//             telefono: 1,
//             aparatos: 1,
//             domicilio: 1,
//             fecha: 1,
//           },
//         },
//         {
//           //para unir(join) 2 colecciones
//           $lookup: {
//             from: "aparatos", //la coleccion de la cual queres los datos para unirla con la coleccion clientes
//             localField: "aparatos", //el campo de la coleccion de la coleccion cliente que contiene el id
//             foreignField: "_id", //el id de la coleccion aparatos que matchea con el id de la coleccion clientes.aparatos
//             as: "aparatos", //nombre generico que se muestran los datos, puede ser cualquier nombre
//           },
//         },
//       ];

//       const response = await Cliente.aggregate(agg);
//       return res.json(response);
//     } else {
//       const clientes = await Cliente.find({})
//         .sort([["fecha", -1]])
//         .populate(
//           "aparatos",
//           "fechaEntrada fechaSalida aparato falla presupuesto observaciones precio estado garantia"
//         );

//       res.status(200).json({
//         ok: true,
//         msg: "Devuelve todos los clientes y sus aparatos",
//         clientes,
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

const getClientes = async (req, res) => {
  const { searchQuery, numeroDni, page } = req.query;

  try {
    const LIMIT = 20;
    const startIndex = (Number(page) - 1) * LIMIT; //get the starting index of every page
    const total = await Cliente.countDocuments({});

    if (searchQuery) {
      const nombre = new RegExp(searchQuery, "i");
      const clients = await Cliente.find({ nombreApellido: nombre })
        .sort([["fecha", -1]])
        .limit(LIMIT)
        .skip(startIndex)
        .populate(
          "aparatos",
          "fechaEntrada fechaSalida aparato falla presupuesto observaciones precio estado garantia"
        );
      res.status(200).json({
        data: clients,
        currentPage: Number(page),
        numberOfPages: Math.ceil(total / LIMIT),
      });
    } else if (numeroDni) {
      //const dniReg = new RegExp(numeroDni, "i");
      const clients = await Cliente.find({ dni: parseInt(numeroDni) })
        .sort([["fecha", -1]])
        .limit(LIMIT)
        .skip(startIndex)
        .populate(
          "aparatos",
          "fechaEntrada fechaSalida aparato falla presupuesto observaciones precio estado garantia"
        );
      res.json({
        data: clients,
        currentPage: Number(page),
        numberOfPages: Math.ceil(total / LIMIT),
      });
    } else {
      const clients = await Cliente.find({})
        .sort([["fecha", -1]])
        .limit(LIMIT)
        .skip(startIndex)
        .populate(
          "aparatos",
          "fechaEntrada fechaSalida aparato falla presupuesto observaciones precio estado garantia"
        );
      res.json({
        data: clients,
        currentPage: Number(page),
        numberOfPages: Math.ceil(total / LIMIT),
      });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

//server side pagination
// const getClientes = async (req, res = response) => {
//   const page = parseInt(req.query.page || "0");
//   //const getNombre = req.query.nombre;
//   //const nombre = getNombre?.toLowerCase();
//   const pageSize = 20;
//   //para contar el numero de documentos de la bd
//   const total = await Cliente.countDocuments({});

//   try {
//     const { nombre } = req.query;
//     if (nombre) {
//       //   clientes = await Cliente.find(
//       //     nombre ? { $text: { $search: nombre } } : {}
//       //   )
//       //     .sort([["fecha", -1]])
//       //     .skip(pageSize * page)
//       //     .limit(pageSize)
//       //     .populate(
//       //       "aparatos",
//       //       "fechaEntrada fechaSalida aparato falla presupuesto observaciones precio estado garantia"
//       //     );

//       //mongodb atlas search
//       const agg = [
//         {
//           $search: {
//             autocomplete: {
//               query: nombre,
//               path: "nombreApellido",
//               fuzzy: { maxEdits: 2 },
//             },
//           },
//         },
//         {
//           $limit: pageSize,
//         },
//         {
//           $skip: pageSize * page,
//         },
//         {
//           $sort: { fecha: -1 },
//         },
//         {
//           $project: {
//             //para mostrar los datos de la coleccion, 1 para mostrar, 0 para no mostrarlo
//             _id: 1,
//             nombreApellido: 1,
//             telefono: 1,
//             aparatos: 1,
//             domicilio: 1,
//             fecha: 1,
//           },
//         },
//         {
//           //para unir(join) 2 colecciones
//           $lookup: {
//             from: "aparatos", //la coleccion de la cual queres los datos para unirla con la coleccion clientes
//             localField: "aparatos", //el campo de la coleccion de la coleccion cliente que contiene el id
//             foreignField: "_id", //el id de la coleccion aparatos que matchea con el id de la coleccion clientes.aparatos
//             as: "aparatos", //nombre generico que se muestran los datos, puede ser cualquier nombre
//           },
//         },
//       ];

//       const response = await Cliente.aggregate(agg);
//       return res.json({ response, totalPages: Math.ceil(total / pageSize) });

//       // res.status(200).json({
//       //   ok: true,
//       //   msg: "Devuelve todos los clientes y sus aparatos",
//       //   clientes,
//       //   //devuelve el total de paginas
//       //   totalPages: Math.ceil(total / pageSize),
//       // });
//     } else {
//       const clientes = await Cliente.find({})
//         .sort([["fecha", -1]])
//         .skip(pageSize * page)
//         .limit(pageSize)
//         .populate(
//           "aparatos",
//           "fechaEntrada fechaSalida aparato falla presupuesto observaciones precio estado garantia"
//         );

//       res.status(200).json({
//         ok: true,
//         msg: "Devuelve todos los clientes y sus aparatos",
//         clientes,
//         //devuelve el total de paginas
//         totalPages: Math.ceil(total / pageSize),
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

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
