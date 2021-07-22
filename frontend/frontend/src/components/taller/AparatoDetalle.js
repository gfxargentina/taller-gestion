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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 " >
          <div className="flex flex-col col-auto">
            <label className="col-auto">Fecha de Entrada</label>
            <input type="text" className="rounded-md p-2" value={ dayjs(aparato.fechaEntrada).format("DD/MM/YYYY") } />
          </div>
          <div className="flex flex-col">
            <label className="">Aparato</label>
            <input type="text" className="rounded-md p-2" value={ aparato.aparato } />
          </div>
          <div className="flex flex-col">
            <label className="">Retirado</label>
            <input type="text" className="rounded-md p-2" value="" />
          </div>
          <div className="flex flex-col">
            <label className="col-auto">Precio</label>
            <input type="text" className="rounded-md p-2" value="$25.000" />
          </div>
          <div className="flex flex-col md:col-span-2">
            <label className="col-auto">Falla</label>
            <input type="text" className="rounded-md p-2" value={ aparato.falla } />
          </div>
          <div className="flex flex-col md:col-span-2">
            <label className="col-auto">Observaciones</label>
            <input type="text" className="rounded-md p-2" value={ aparato.observaciones } />
          </div>
          <div className="flex flex-col md:col-span-3">
            <label className="col-auto">Presupuesto</label>
            <input type="text" className="rounded-md p-2" value={ aparato.presupuesto } />
          </div>
          <div className="flex flex-col">
            <label className="col-auto">Precio</label>
            <input type="text" className="rounded-md p-2" value="$15.000" />
          </div>
        </div>
      </div>
		</>
	);
};
