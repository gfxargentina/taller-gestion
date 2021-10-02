import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

export const FacturaAparato = () => {
    
    //trae el id del aparato
    const { aparatoId } = useParams();
    //console.log(aparatoId);

    //trae el id de activeClient
    const id = useSelector(state => state.clientes.activeClient)

    //busca el cliente del store con el id de activeClient    
    const cliente = useSelector(state => state.clientes.clients.find(client => client.id === id ))
    
	//busca el aparato del cliente
	const aparato = cliente.aparatos.find((aparato) => aparato._id === aparatoId);
    console.log(aparato);

    
    return (
        <div className="flex max-w-4xl mx-auto justify-center">            
          <div className="grid grid-cols-3 grid-rows-3 px-3 border-2 border-gray-500 ">
              <div className="col-span-2 ">
                  <h2 className="text-indigo-800 font-bold mb-3" >FACTURA PARA:</h2>
                  <h2 className="font-semibold" > {cliente.nombreApellido} </h2>
                  <h3> {cliente.domicilio} </h3>
                  <h3> {cliente.telefono} </h3>
                  
              </div>

            <div className="pl-2">
                
                <h2 className="font-semibold mb-3" >I.V.A Responsable Monotributo</h2>
                <h3>CUIT: 20-12148277-1</h3>
                <h3>Ing.Brutos: 347510 </h3>
                <h3>Inicio de Act.: 05/1993</h3>              
              </div>

              <div className="col-span-3 mt-5" >
              <h1 className="bg-blue-400 font-semibold text-center text-white text-2xl px-5" >DETALLE</h1>
              <div className="border-2 border-gray-500 mt-3" >
              <div className="col-span-2 mt-1" >
              <h2 className="font-semibold text-xl text-center " >Falla:</h2>
                <h2 className="bg-gray-400 font-semibold text-white px-5" > { aparato.falla } </h2>
              </div>

              <div className="mt-1" >
              <h2 className="font-semibold text-xl text-center" >Presupuesto:</h2>
                <h2 className="bg-green-600 font-semibold text-white px-5" > { aparato.presupuesto } </h2>
              </div>
              <div className="mt-1" >
              <h2 className="font-semibold text-xl text-center" >Observaciones:</h2>
                <h2 className="bg-yellow-700 font-semibold text-white px-5 " > { aparato.observaciones } </h2>
              </div>        
              </div>              
              
             </div>          
                    
          
            </div>

            
          
        </div>
        
    )
}
