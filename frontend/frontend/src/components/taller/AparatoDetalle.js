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
      <div className="bg-blue-400 min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2" >
          <div className="flex flex-col">
            <label className="text-center">Fecha de Entrada</label>
            {/* <input type="text" className="rounded-md p-2" value={ dayjs(aparato.fechaEntrada).format("DD/MM/YYYY") } /> */}
            <div className="flex-none bg-white rounded-md p-2 text-center">
            { dayjs(aparato.fechaEntrada).format("DD/MM/YYYY") }
            </div>
          </div>
          <div className="flex flex-col ">
            <label className="text-center">Aparato</label>
            {/* <input type="text" className="rounded-md p-2" value={ aparato.aparato } /> */}
            <div className="bg-white rounded-md p-2">
            { aparato.aparato }
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-center">Estado</label>
            <div className="bg-white rounded-md p-2 text-center">
                En Observacion            
            </div>
          </div>
          <div className="flex flex-col">
            <label className="col-auto">Fecha de Retirado</label>
            <input type="text" className="rounded-md p-2" value="$25.000" />
          </div>
          <div className="flex flex-col md:col-span-2">
            <label className="col-auto">Falla</label>
            <div className="bg-white rounded-md p-2 h-24 max-w-prose"> {aparato.falla} </div>
          </div>
          <div className="flex flex-col md:col-span-2">
            <label className="">Observaciones</label>
            <div className="bg-white rounded-md p-2 h-24 max-w-prose"> {aparato.observaciones} </div>
          </div>
          <div className="flex flex-col md:col-span-2">
            <label className="col-auto">Presupuesto</label>            
            <div className="bg-white rounded-md p-2 h-24 max-w-prose" > {aparato.presupuesto}  </div>
          </div>
          <div className="flex flex-col md:col-span-1">
            <label className="col-auto">Precio</label>            
            <div className="bg-white rounded-md p-2 w-24 " >$16.000</div>
          </div>
        </div>
      </div>
		</>
	);
};
