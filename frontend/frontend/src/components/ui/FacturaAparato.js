import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import logo from "../../img/logo-factura.png";

export const FacturaAparato = () => {
  //trae el id del aparato
  const { aparatoId } = useParams();
  //console.log(aparatoId);

  //trae el id de activeClient
  const id = useSelector((state) => state.clientes.activeClient);

  //busca el cliente del store con el id de activeClient
  const cliente = useSelector((state) =>
    state.clientes.clients.find((client) => client.id === id)
  );

  //busca el aparato del cliente
  const aparato = cliente.aparatos.find((aparato) => aparato._id === aparatoId);
  console.log(aparato);

  return (
    <div className="container p-8  max-w-4xl mx-auto justify-center">
      <Link
        to="/"
        className="print:hidden px-5 py-1 mt-5 shadow-lg text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline 
                               hover:bg-green-500 hover:text-indigo-100"
      >
        Volver al inicio
      </Link>
      <div className="flex items-center bg-blue-500 justify-between mt-8  px-3">
        <div className="h-24 w-24 flex items-center">
          <img src={logo} alt="logo" />
          <h2 className="text-white text-2xl ml-3 font-bold">
            Servico Electronico
          </h2>
        </div>

        <div className="text-white">
          <h2 className="font-semibold mb-3">I.V.A Responsable Monotributo</h2>
          <h3>CUIT: 20-12148277-1</h3>
          <h3>Ing.Brutos: 347510 </h3>
          <h3>Inicio de Act.: 05/1993</h3>
        </div>
      </div>
      <div className="flex justify-around mt-2  px-3  ">
        <div className="">
          <h2 className="text-indigo-600 font-bold mb-3">FACTURA PARA:</h2>
          <h2 className="font-semibold"> {cliente.nombreApellido} </h2>
          <h3> {cliente.domicilio} </h3>
          <h3> {cliente.telefono} </h3>
        </div>

        <div className="bg-blue-500 px-8 text-white">
          <h2 className="font-semibold mb-3">Aparato:</h2>
          <h3>Entregado: {moment(aparato.fechaSalida).format("DD-MM-YYYY")}</h3>
          <h3>{aparato.aparato}</h3>
          <h3>Observaciones: {aparato.observaciones} </h3>
          <h3>
            ingreso el {moment(aparato.fechaEntrada).format("DD-MM-YYYY")}
          </h3>
        </div>
      </div>

      <div className=" bg-gray-600 mt-8 text-white text-center font-bold ">
        DETALLE DE FACTURA
      </div>

      <div className="mt-5">Falla: {aparato.falla}</div>
      <div className="border border-gray-400"></div>
      <div className="mt-8">Presupuesto: {aparato.presupuesto}</div>
      <div className="border border-gray-400"></div>
      <div className="mt-8">Garantia: {aparato.garantia}</div>
      <div className="border border-gray-400"></div>

      <div className="mt-8 mb-2 border-4 border-gray-400"></div>

      <div className="flex justify-end bg-blue-400 text-white px-2 font-bold">
        TOTAL: ${aparato.precio}
      </div>

      <div className="mt-8 border-2 border-gray-400"></div>
      <div className="bg-gray-600 text-white p-2">
        TERMINOS:
        <p>
          A) La reparación del aparato tiene una garantia de 60 dias a partir de
          la fecha de entrega y se refiere exclusivamente a la reparación
          efectuada.
        </p>
        <p className="mt-4">
          B) El importe de la reparación sera el que rija en el momento de la
          entrega.
        </p>
        <p className="mt-4">
          C) Pasados 90 dias de la fecha prometida, el aparato sin retirar
          quedara de propiedad de este servicio tecnico (art.872 y 873 Codigo
          Civil)
        </p>
        <p className="mt-4">
          D) Debera retirar el aparato dentro de los 30 dias despues de la
          confirmación de raparación. Vencido este plaza se cobrara almacenaje
          por el mismo.
        </p>
      </div>
    </div>
  );
};
