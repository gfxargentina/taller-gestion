import React, { useState, useEffect } from 'react'
import dayjs from "dayjs";
import { useDispatch, useSelector} from 'react-redux';
import { startGetClients, setActiveClient, deleteClient } from '../../actions/clients';
import { NoHayClientes } from './NoHayClientes';
import {  Link } from "react-router-dom";
import { ClientModal } from '../taller/ClientModal';
import { startGetAparatos } from '../../actions/aparatos';
import Swal from 'sweetalert2';

//buscar cliente por DNI  
 function searchTerm(term)  {   
   return function(x){
     //console.log(typeof x);        
     //return x.nombreApellido.toLowerCase().includes(term) || !term;     
     return x.dni.toString().includes(term);
     
   }
 }

 //buscar cliente por apellido
 function searchTerm2(termApellido)  {   
  return function(x){
    //console.log(typeof x);        
    return x.nombreApellido.toLowerCase().includes(termApellido) || !termApellido;     
        
  }
}



  

export const Clientes = () => {

  const dispatch = useDispatch();  
  const clientes = useSelector( state => state.clientes.clients );
  
  //console.log(clientes)
  
  useEffect(() => {
    
      dispatch( startGetClients() );
     //no se le pasa un objeto solo como dependencia, usar objeto.props para 
     //que no haiga un loop infinito
  }, [dispatch, clientes.aparatos])

  // const editarCliente = (e) => {
  //   //console.log(e.target.name)
  //      dispatch( setActiveClient(e.target.name) )
  // }

  const editClientComponent = (e) => {
        // le mande el id del cliente a activeClient en el store
         dispatch( setActiveClient(e.target.name) )
  }

  const aparatos = (e) => {
    //console.log(e.target.name)
    dispatch( setActiveClient(e.target.name) )
    dispatch( startGetAparatos(e.target.name))
    
  }

  const deleteClientRedux = (e) => {
    //console.log(e.target.name)
    Swal.fire({
      title: 'Esta seguro de borrar a este cliente?',
      text: "Esta acción NO podra ser revertida",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, Borrar Cliente'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch( deleteClient(e.target.name))
        Swal.fire({
          title:'El Cliente fue Borrado de la base de datos!',          
          icon:'success' 
        }                   
        )
      }
    })
     
  }

    //search bar
    
    const [data, setData] = useState([]);
    const [term, setTerm] = useState('');
    const [termApellido, setTermApellido] = useState('') 
    
    

    useEffect(() => {
      setData(clientes);
    }, [clientes])

    

    return (
    <>        
          {
            ( data.length > 0 ) ? (
              <div>
              <div className="flex flex-col container mx-auto">              
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="grid grid-cols-5 gap-4">
                   
                    <div className="flex flex-col mt-5">
                      <label className="mr-3 font-medium text-green-700 text-center">Buscar Cliente por D.N.I:</label>
                            <input type="text" 
                                    name="term"
                                    placeholder="escriba el D.N.I aqui"
                                    onChange={ e => setTerm(e.target.value)}                                
                                    className="h-10 px-5 mb-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:outline-none"
                            />
                      </div>

                  <div className="flex flex-col mt-5">
                      <label className="mr-3 font-medium text-green-700 text-center">Buscar Cliente por Apellido y nombre:</label>
                            <input type="text" 
                                    name={termApellido}
                                    placeholder="escriba el Apellido aqui"
                                    onChange={ e => setTermApellido(e.target.value.toLowerCase())}                                
                                    className="h-10 px-5 mb-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:outline-none"
                            />
                      </div>
                                  
                    </div>
                     
                 
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <Link to="/nuevo-cliente">
                  <button class="h-10 px-5 mt-5 mb-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline 
                              hover:bg-indigo-500 hover:text-indigo-100">Nuevo Cliente</button>
                  </Link>
                  
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider"
                          >
                            DNI
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Apellido y Nombre
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Domicilio y Telefono
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Fecha de Ingreso
                          </th>
                          <th scope="col" className="relative px-6 py-3 font-medium text-gray-500 uppercase tracking-wider">
                            <span className="">Operaciones</span>
                          </th>
                        </tr>
                      </thead>
                      
                      
                          <tbody className="bg-white  divide-y divide-gray-300">
                        {/* el ? se usa para que cuando llame a la api no de undefined,
                         porque el componente se carga primero y los datos todavia no estan listos */}
                        {data?.filter(searchTerm(term)).filter(searchTerm2(termApellido)).map((person) => (
                          <tr key={person.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">                                
                                <div className="ml-6">
                                  <div className="text-lg font-medium text-blue-600">{person.dni}</div>
                                  {/* <div className="text-base text-gray-500">{person.email}</div> */}
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-lg font-medium text-gray-900">{person.nombreApellido}</div>
                              <div className="text-base text-gray-500">{person.email}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-lg font-medium text-gray-900">{person.domicilio}</div>
                              <div className="text-base text-gray-500">{person.telefono}</div>
                              {/* <span className="px-4 inline-flex text-base leading-8 font-semibold rounded-full bg-green-100 text-green-800">
                                { dayjs(person.fecha).format("DD/MM/YYYY") }
                              </span> */}
                            </td>
                            <td className="px-3 py-3 whitespace-nowrap">
                                <span className="px-4 inline-flex text-base leading-8 font-semibold rounded-full bg-green-100 text-green-800">
                                { dayjs(person.fecha).format("DD/MM/YYYY") }</span>
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <Link to="/aparatos">                            
                              <button onClick={ aparatos }  name={ person.id } class="h-10 px-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 
                              rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100">Aparatos</button>
                              </Link>  

                              <Link to="/editar-cliente">
                              <button onClick={ editClientComponent }  name={ person.id } class="h-10 ml-5 px-5  text-indigo-700 transition-colors duration-150 border border-green-500 
                              rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-indigo-100">Editar</button>
                              </Link>
                                                        
                               <button onClick={ deleteClientRedux } name={ person.id } class="h-10 ml-5 px-5 text-indigo-700 transition-colors duration-150 border border-red-500 
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
            ) : ( <NoHayClientes />)
          } 

          <ClientModal />            
    </>
        
    )
}
