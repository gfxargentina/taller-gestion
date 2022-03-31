//  ruta clientes

const { Router } = require("express");
const router = Router();
const { check } = require("express-validator");

const {
  getClientes,
  crearCliente,
  actualizarCliente,
  eliminarCliente,
} = require("../controllers/clientes");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");

// validar todas las rutas con el middleware JWT
router.use(validarJWT);

//obtener clientes
router.get("/clientes", getClientes);

//crear un nuevo cliente
router.post(
  "/",
  [
    check("dni", "El DNI es obligatorio").not().isEmpty(),
    check("nombreApellido", "El nombre y apellido son obligatorios")
      .not()
      .isEmpty(),
    check("telefono", "El telefono es obligatorio").not().isEmpty(),
    //check("email", "El email no es correcto").isEmail(),
    //check("domicilio", "El domicilio es obligatorio"),
    validarCampos,
  ],
  crearCliente
);

//actualizar cliente
router.put(
  "/:id",
  [
    check("dni", "El DNI es obligatorio").not().isEmpty(),
    check("nombreApellido", "El nombre y apellido son obligatorios")
      .not()
      .isEmpty(),
    check("telefono", "El telefono es obligatorio").not().isEmpty(),
    check("email", "El email no es correcto").isEmail(),
    check("domicilio", "El domicilio es obligatorio"),
    validarCampos,
  ],
  actualizarCliente
);

//borrar cliente
router.delete("/:id", eliminarCliente);

module.exports = router;
