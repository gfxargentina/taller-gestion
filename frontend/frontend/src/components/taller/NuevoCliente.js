import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { startAddNewClient } from "../../actions/clients";
import { useForm } from "../../hooks/useForm";
import { useHistory } from "react-router-dom";

export const NuevoCliente = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [newClient, handleNewClientInput] = useForm({
    dni: "",
    nombreApellido: "",
    email: "",
    telefono: "",
    domicilio: "",
  });

  const { dni, nombreApellido, email, telefono, domicilio } = newClient;

  const handleNewClient = (e) => {
    e.preventDefault();
    //console.log(formRegister)

    dispatch(startAddNewClient(newClient));
    Swal.fire({
      icon: "success",
      title: "OK",
      text: "Se registro un nuevo cliente",
    });

    history.push("/");
  };

  return (
    <>
      <section className="flex flex-col md:flex-row  items-center">
        <div
          className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3  px-6 lg:px-16 xl:px-12
                    flex items-center justify-center"
        >
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              Registre un nuevo cliente
            </h1>

            <form className="mt-6" onSubmit={handleNewClient}>
              <div className="mb-4">
                <label className="block text-gray-700">DNI</label>
                <input
                  type="text"
                  name="dni"
                  value={dni}
                  onChange={handleNewClientInput}
                  placeholder="ingrese DNI"
                  class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autofocus
                  autocomplete
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Apellido y Nombre</label>
                <input
                  type="text"
                  name="nombreApellido"
                  value={nombreApellido}
                  onChange={handleNewClientInput}
                  placeholder="ingrese Apellido y Nombre"
                  class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autofocus
                  autocomplete
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleNewClientInput}
                  placeholder="ingrese su email"
                  class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autofocus
                  autocomplete
                />
              </div>

              <div class="mt-4">
                <label className="block text-gray-700">Telefono</label>
                <input
                  type="text"
                  name="telefono"
                  value={telefono}
                  onChange={handleNewClientInput}
                  placeholder="ingrese el telefono"
                  minlength="6"
                  class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                            focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div class="mt-4">
                <label className="block text-gray-700">Domicilio</label>
                <input
                  type="text"
                  name="domicilio"
                  value={domicilio}
                  onChange={handleNewClientInput}
                  placeholder="ingrese el domicilio"
                  minlength="6"
                  class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                            focus:bg-white focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                            px-4 py-3 mt-6"
              >
                Registrar Nuevo Cliente
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
