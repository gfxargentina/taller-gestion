import React from 'react'
import { useDispatch, useSelector} from 'react-redux';
import {  Link } from "react-router-dom";
import dayjs from "dayjs";
import { ClientModal } from '../taller/ClientModal';
import { NoHayAparatos } from './NoHayAparatos';
import { aparatoActivo, deleteAparato} from '../../actions/aparatos';
import Swal from 'sweetalert2';


  

export const GetAparatos = () => {

  const dispatch = useDispatch();
  //const clientes = useSelector( state => state.clientes.clients );
  

   //trae el id de activeClient
   const id = useSelector(state => state.clientes.activeClient)

   //busca el cliente del store con el id de activeClient
   //despues le pasa los datos al useForm
   const { aparatos } = useSelector(state => state.clientes.clients.find(client => client.id === id ))
  //console.log( aparatos )

  
  
    
  
  const detalleAparato = (e) => {        
         //console.log(e.target.name)
         dispatch( aparatoActivo(e.target.name))
         
  }

  const editarAparato = (e) => {        
    //console.log(e.target.name)
    dispatch( aparatoActivo(e.target.name))
    
}

  const eliminarAparato = (e) => {
    Swal.fire({
      title: 'Esta seguro de borrar este aparato?',
      text: "Esta acción NO podra ser revertida",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, Borrar Aparato'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteAparato(e.target.name))
        Swal.fire({
          title:'El Aparato fue Borrado de la base de datos!',          
          icon:'success' 
        }                   
        )
      }
    })
    
  }

  


    return (
    <> 
       
          { 
            ( aparatos.length > 0 ) ? (
              <div>
              <div className="flex flex-col container mx-auto">              
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  
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
                        {aparatos?.map((aparato) => (
                          <tr key={aparato.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">                                
                                <div className="ml-6">
                                  <div className="text-lg font-medium text-gray-900">{aparato.aparato}</div>                                  
                                  {/* <div className="text-base text-gray-500">person.email</div> */}
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-lg font-medium text-red-700">SIN REVISAR</div>
                              {/* <div className="text-base text-gray-500">person.telefono</div> */}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-4 inline-flex text-base leading-8 font-semibold rounded-full bg-green-100 text-green-800">
                                 { dayjs(aparato.fechaEntrada).format("DD/MM/YYYY") }
                              </span>
                            </td>
                            <td className="px-3 py-3 whitespace-nowrap text-lg font-medium text-gray-500"> {aparato.presupuesto} </td>
                            <td className="px-3 py-3 whitespace-nowrap text-center text-lg font-medium text-gray-500"> $27000 </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <Link to="/detalle-aparato">                             
                              <button onClick={ detalleAparato }  name={ [aparato._id] } class="h-10 px-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 
                              rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100">Detalle</button>
                              </Link>

                              <Link to="/editar-aparato">
                              <button onClick={ editarAparato }  name={ [aparato._id] } class="h-10 ml-5 px-5  text-indigo-700 transition-colors duration-150 border border-green-500 
                              rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-indigo-100">Editar</button>
                              </Link>
                                                        
                               <button onClick={ eliminarAparato }  name={ [aparato._id] } class="h-10 ml-5 px-5 text-indigo-700 transition-colors duration-150 border border-red-500 
                              rounded-lg focus:shadow-outline hover:bg-red-500 hover:text-indigo-100">Eliminar</button>
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
            ) : ( <NoHayAparatos />)
          } 

          <ClientModal />            
    </>
        
    )
}
