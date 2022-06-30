import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { ClientModal } from "../taller/ClientModal";
import { NoHayAparatos } from "./NoHayAparatos";
import { aparatoActivo } from "../../actions/aparatos";
//import Swal from "sweetalert2";
//import { EditarAparato2 } from "../taller/EditarAparato2";

export const GetAllAparatos = () => {
  const dispatch = useDispatch();
  //const clientes = useSelector( state => state.clientes.clients );

  //trae el id de activeClient
  const aparatos = useSelector((state) => state.aparatos.aparatos);

  //   //busca el cliente del store con el id de activeClient
  //   //despues le pasa los datos al useForm
  //   const { aparatos, nombreApellido } = useSelector((state) =>
  //     state.clientes.clients.find((client) => client.id === id)
  //   );

  const [aparatosFiltro, setAparatosFiltro] = useState([]);

  const detalleAparato = (e) => {
    //console.log(e);
    dispatch(aparatoActivo(e));
  };

  const editarAparato = (e) => {
    //console.log(e.target.name)
    dispatch(aparatoActivo(e));
  };

  // const eliminarAparato = (e) => {
  //   Swal.fire({
  //     title: "Esta seguro de borrar este aparato?",
  //     text: "Esta acción NO podra ser revertida",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     cancelButtonText: "Cancelar",
  //     confirmButtonText: "Si, Borrar Aparato",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       dispatch(deleteAparato(e.target.name));
  //       Swal.fire({
  //         title: "El Aparato fue Borrado de la base de datos!",
  //         icon: "success",
  //       });
  //     }
  //   });
  // };

  //devuelve el estado o el tecnico, a cada Select input se lo pone name:'' , para diferenciar cada input
  const filtroAparatos = (e) => {
    const filtro = e.target.value;
    setAparatosFiltro({
      [e.target.name]: filtro,
    });
  };

  //con el  &&(AND)pasan las 2 condiciones para que el filtro funcione bien
  const filtro =
    !aparatosFiltro.estado && !aparatosFiltro.tecnico
      ? aparatos
      : aparatos.filter(
          (aparato) =>
            //con el ||(OR) solo 1 de las condiciones pasa
            aparato.estado === aparatosFiltro.estado ||
            aparato.tecnico === aparatosFiltro.tecnico
        );

  return (
    <>
      {aparatos?.length > 0 ? (
        <div>
          <div className="flex flex-col container mx-auto">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block justify-center min-w-full sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 mt-5">
                  <div>
                    <label className="mr-3 font-medium text-green-700 text-center">
                      Buscar Aparatos por Estado:
                    </label>
                    <div class="mb-3 xl:w-96">
                      <select
                        name="estado"
                        onChange={(e) => filtroAparatos(e)}
                        className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700
                                  bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300                                 rounded
                                  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-label="Default select example"
                      >
                        <option defaultValue>Elija Estado del Aparato</option>
                        <option value="SIN REVISAR">Sin Revisar</option>
                        <option value="REVISADO">Revisado</option>
                        <option value="TERMINADO">Terminado</option>
                        <option value="ENTREGADO">Entregado</option>
                        <option value="DEVUELTO">Devuelto</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mr-3 font-medium text-green-700 text-center">
                      Buscar Aparatos por Tecnico:
                    </label>
                    <div class="mb-3 xl:w-96">
                      <select
                        name="tecnico"
                        onChange={(e) => filtroAparatos(e)}
                        className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700
                                  bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300                                 rounded
                                  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-label="Default select example"
                      >
                        <option selected>Elija Tecnico</option>
                        <option value="JESUS">Jesus</option>
                        <option value="ALEJANDRO">Alejandro</option>
                        <option value="BRUNO">Bruno</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="shadow overflow-hidden  sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Aparato
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Estado
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Fecha de ingreso
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Retirado
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Precio
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>

                    <tbody className="bg-white  divide-y divide-gray-300">
                      {/* el ? se usa para que cuando llame a la api no de undefined,
                         porque el componente se carga primero y los datos todavia no estan listos */}
                      {filtro?.map((aparato) => (
                        <tr
                          key={aparato.id}
                          className={
                            aparato.estado === "SIN REVISAR"
                              ? "bg-red-700"
                              : "" || aparato.estado === "REVISADO"
                              ? "bg-yellow-500"
                              : "" || aparato.estado === "TERMINADO"
                              ? "bg-orange-500"
                              : "" || aparato.estado === "ENTREGADO"
                              ? "bg-green-600"
                              : "" || aparato.estado === "DEVUELTO"
                              ? "bg-stone-700"
                              : ""
                          }
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-6">
                                <div className="text-lg font-medium text-white drop-shadow-xl ">
                                  {aparato.aparato}
                                </div>

                                <div className="text-base font-bold text-white drop-shadow-lg">
                                  {aparato.cliente.nombreApellido}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg font-medium text-white drop-shadow-lg">
                              {aparato.estado}
                            </div>
                            {/* <div className="text-base text-gray-500">person.telefono</div> */}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-4 inline-flex text-base leading-8 font-semibold rounded-full bg-green-100 text-green-800">
                              {dayjs(aparato.fechaEntrada).format("DD/MM/YYYY")}
                            </span>
                          </td>
                          <td className="px-3 py-3 whitespace-nowrap text-lg font-medium text-white">
                            {aparato.fechaSalida
                              ? dayjs(aparato.fechaSalida).format("DD/MM/YYYY")
                              : ""}
                          </td>
                          <td className="px-3 py-3 whitespace-nowrap text-center text-lg font-medium text-white drop-shadow-lg">
                            ${aparato.precio}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Link to="/detalle-aparato2">
                              <button
                                onClick={() => detalleAparato(aparato.id)}
                                name={[aparato.id]}
                                class="h-10 px-5 text-white transition-colors duration-150 border border-white 
                              rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100 drop-shadow-lg"
                              >
                                Detalle
                              </button>
                            </Link>

                            <Link to="/editar-aparato2">
                              <button
                                onClick={() => editarAparato(aparato.id)}
                                name={[aparato._id]}
                                class="h-10 ml-5 px-5  text-white transition-colors duration-150 border border-white 
                              rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-indigo-100 drop-shadow-lg "
                              >
                                Editar
                              </button>
                            </Link>

                            {/* <button
                              onClick={eliminarAparato}
                              name={[aparato._id]}
                              class="h-10 ml-5 px-5 text-white transition-colors duration-150 border border-white 
                              rounded-lg focus:shadow-outline hover:bg-red-500 hover:text-indigo-100"
                            >
                              Eliminar
                            </button> */}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <NoHayAparatos />
      )}

      <ClientModal />
    </>
  );
};
