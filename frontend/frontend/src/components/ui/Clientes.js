import React, { useEffect } from 'react'

import { useDispatch, useSelector} from 'react-redux';
import { startGetClients } from '../../actions/clients';
import { NoHayClientes } from './NoHayClientes';
import {  Link } from "react-router-dom";





// const people = [
//     {
//       name: 'Jane Cooper',
//       title: 'Regional Paradigm Technician',
//       department: 'Optimization',
//       role: 'Admin',
//       email: 'jane.cooper@example.com',
//       image:
//         'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//     },
//     {
//         name: 'Jane Cooper',
//         title: 'Regional Paradigm Technician',
//         department: 'Optimization',
//         role: 'Admin',
//         email: 'jane.cooper@example.com',
//         image:
//           'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//       },
//     // More people...
//   ]



  

export const Clientes = () => {

  const dispatch = useDispatch();
  const clientes = useSelector( state => state.clientes.clients )
  console.log(clientes)
  
  useEffect(() => {
    dispatch( startGetClients() );
  }, [dispatch])


    return (
    <> 
       
          {
            ( clientes.length > 0 ) ? (
              <div>
              <div className="flex flex-col container mx-auto">              
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
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
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Apellido y nombre
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Domicilio y Telefono
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Fecha de ingreso
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            DNI
                          </th>
                          <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      
                      
                          <tbody className="bg-white divide-y divide-gray-200">
                        {/* el ? se usa para que cuando llame a la api no de undefined,
                         porque el componente se carga primero y los datos todavia no estan listos */}
                        {clientes?.map((person) => (
                          <tr key={person.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                    {/* <img className="h-10 w-10 rounded-full"  alt="" />   */}
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">{person.nombreApellido}</div>
                                  <div className="text-sm text-gray-500">{person.email}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{person.domicilio}</div>
                              <div className="text-sm text-gray-500">{person.telefono}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Entregado
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.dni}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="ex" className="text-indigo-600 hover:text-indigo-900">
                                Edit
                              </a>
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
    </>
        
    )
}
