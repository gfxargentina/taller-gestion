const { response } = require("express");
const Aparato = require("../models/Aparato");
const Cliente = require("../models/Cliente");

//ingresar nuevo aparato
const nuevoAparato = async (req, res = response) => {
  //console.log(req.body)
  //console.log(res)

  const aparato = new Aparato(req.body);

  try {
    //trae el id del cliente y lo guarda en la coleccion aparato
    aparato.cliente = req.params.id;

    //trae el uid del usuario y lo guarda en la coleccion aparato
    aparato.user = req.uid;

    //guarda el aparato
    const aparatoGuardado = await aparato.save();

    //actualiza el cliente con el nuevo aparato ingresado
    const id = req.params.id;
    await Cliente.findByIdAndUpdate(id, {
      $push: { aparatos: aparatoGuardado._id },
    });

    res.status(201).json({
      ok: true,
      msg: "Aparato guardado",
      aparato: aparatoGuardado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

//obtener todos los aparatos
const getAparatos = async (req, res = response) => {
  const aparatos = await Aparato.find()
    .populate("cliente", "nombreApellido domicilio telefono email")
    .sort([["fechaSalida", -1]]);

  res.status(200).json({
    ok: true,
    aparatos,
  });
};

//Actualizar Aparato
const actualizarAparato = async (req, res = response) => {
  //id del aparato a actualizar
  const aparatoId = req.params.id;

  //trae el uid del usuario
  const uid = req.uid;

  try {
    //busca el aparato en la db por id
    const aparato = await Aparato.findById(aparatoId);

    if (!aparato) {
      return res.status(404).json({
        ok: false,
        msg: "No existe ningun aparato con ese id",
      });
    }
    //verificar que sea el mismo usuario el que quiere realizar los cambios
    if (aparato.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "No esta autorizado a editar este cliente",
      });
    }

    //datos actualizados
    const aparatoEditado = {
      ...req.body,
      user: uid,
    };

    //busca el aparato para actualizar, findByIdAndUpdate recibe el id, los nuevos datos, y
    //devuelve el nuevo aparato actualizado con new: true en la response
    const aparatoActualizado = await Aparato.findByIdAndUpdate(
      aparatoId,
      aparatoEditado,
      { new: true }
    );
    res.json({
      ok: true,
      aparatoActualizado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

// Borrar aparato
const eliminarAparato = async (req, res = response) => {
  //id del aparato a eliminar
  const aparatoId = req.params.id;

  //trae el uid del usuario
  const uid = req.uid;

  try {
    //busca el aparato en la db por id
    const aparato = await Aparato.findById(aparatoId);

    if (!aparato) {
      return res.status(404).json({
        ok: false,
        msg: "No existe ningun aparato con ese id",
      });
    }
    //verificar que sea el mismo usuario el que quiere realizar los cambios
    if (aparato.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "No esta autorizado a eliminar este aparato",
      });
    }

    //elimina el aparato
    await Aparato.findByIdAndDelete(aparatoId);

    res.json({
      ok: true,
      msg: "Aparato eliminado",
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
  nuevoAparato,
  getAparatos,
  actualizarAparato,
  eliminarAparato,
};
