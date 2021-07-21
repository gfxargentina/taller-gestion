import React from 'react';
import { useSelector } from 'react-redux';
//import { Aparatos } from './Aparatos';

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
			
			<div className="relative flex items-center">             
  <div className=" w-full ">
  <h1 className="text-center" >Detalle de aparato</h1>
    <div className="w-2/3 mx-auto shadow-md rounded-md p-4 bg-white">
      
      <div className="flex gap-2 flex-col md:flex-row center">
        <div className="relative flex-1">
          <input id="departure" value={aparato.fechaEntrada} name="departure" type="text" className="peer h-10 w-full border border-1.5 rounded-md border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-red-600 focus:border-2 p-3" placeholder="quelquechose" />
          <label for="departure" className="absolute left-2 px-1 -top-2.5 bg-white text-red-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-red-600 peer-focus:text-sm">Fecha entrada :</label>
          
        </div>
        <div className="relative self-center">
          
        </div>
        <div className="relative flex-1">
          <input id="arrival" value={aparato.aparato} name="arrival" type="text" className="peer h-10 w-full border border-1.5 rounded-md border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-red-600 focus:border-2 p-3" placeholder="quelquechose" />
          <label for="arrival" className="absolute left-2 px-1 -top-2.5 bg-white text-red-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-red-600 peer-focus:text-sm">Aparato :</label>
        </div>
        <div></div>
        <div className="relative flex-1">
          <input id="eta" value="20/07/2021" name="eta" type="text" className="peer h-10 w-full border border-1.5 rounded-md border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-red-600 focus:border-2 p-3" placeholder="quelquechose" />
          <label for="eta" className="absolute left-2 px-1 -top-2.5 bg-white text-red-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-red-600 peer-focus:text-sm">Entregado :</label>
         
        </div>
        <div className="relative flex-1">
          <input id="etd" name="etd" type="text" className="peer h-10 w-full border border-1.5 rounded-md border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-red-600 focus:border-2 p-3" placeholder="quelquechose" />
          <label for="etd" className="absolute left-2 px-1 -top-2.5 bg-white text-red-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-red-600 peer-focus:text-sm">Precio :</label>
          
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button className="bg-red-900 text-white font-extrabold text-lg rounded-lg px-6 py-3">Actualizar Aparato</button>
      </div>
    </div>
  </div>
</div>
		</>
	);
};
