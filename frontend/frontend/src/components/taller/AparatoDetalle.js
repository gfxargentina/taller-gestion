import React from 'react';
import { useSelector } from 'react-redux';
import dayjs from "dayjs";


export const AparatoDetalle = () => {
	//trae el id de activeClient del store
	const id = useSelector((state) => state.clientes.activeClient);

	//busca el cliente del store con el id de activeClient
	const cliente = useSelector((state) => state.clientes.clients.find((client) => client.id === id));
	//console.log(cliente.aparatos);

	//trae el id del aparato del store
	const aparatoid = useSelector((state) => state.aparatos.aparatoActivo);
	//busca el aparato del cliente
	const aparato = cliente.aparatos.find((aparato) => aparato._id === aparatoid);
	//console.log(aparato);

	return (
		<>
      <div className="min-h-screen flex items-start justify-center p-5">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2" >
          <div className="flex flex-col shadow-2xl ">
            <label className="text-center font-bold">Fecha de Entrada</label>
            {/* <input type="text" className="rounded-md p-2" value={ dayjs(aparato.fechaEntrada).format("DD/MM/YYYY") } /> */}
            <div className="flex-none bg-white rounded-md p-2 text-center border border-blue-500">
            { dayjs(aparato.fechaEntrada).format("DD/MM/YYYY") }
            </div>
          </div>
          <div className="flex flex-col shadow-2xl ">
            <label className="text-center font-bold">Aparato</label>
            {/* <input type="text" className="rounded-md p-2" value={ aparato.aparato } /> */}
            <div className="bg-white rounded-md p-2 border border-blue-500">
            { aparato.aparato }
            </div>
          </div>
          <div className="flex flex-col shadow-2xl">
            <label className="text-center font-bold">Estado</label>
            <div className="bg-white rounded-md p-2 text-center border border-blue-500">
                En Observacion            
            </div>
          </div>
          <div className="flex flex-col shadow-2xl">
            <label className="col-auto font-bold">Fecha de Retirado</label>
            <input type="text" className="rounded-md p-2 border border-blue-500" value="$25.000" />
          </div>
          <div className="flex flex-col md:col-span-2 shadow-2xl">
            <label className="col-auto font-bold">Falla</label>
            <div className="bg-white rounded-md p-2 h-24 w-auto border border-blue-500"> {aparato.falla} </div>
          </div>
          <div className="flex flex-col md:col-span-2 shadow-2xl">
            <label className="font-bold">Observaciones</label>
            <div className="bg-white rounded-md p-2 h-24 w-auto border border-blue-500"> {aparato.observaciones} </div>
          </div>
          <div className="flex flex-col md:col-span-2 shadow-2xl">
            <label className="col-auto font-bold">Presupuesto</label>            
            <div className="bg-white rounded-md p-2 h-24 w-auto border border-blue-500" > {aparato.presupuesto}  </div>
          </div>
          <div className="flex flex-col md:col-span-1">
            <label className="col-auto font-bold">Precio</label>            
            <div className="bg-white rounded-md p-2 w-24 border border-blue-500" >$16.000</div>
          </div>
        </div>
      </div>
		</>
	);
};