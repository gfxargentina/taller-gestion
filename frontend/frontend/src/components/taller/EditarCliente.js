import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { startEditClient } from '../../actions/clients';
//import DateTimePicker from 'react-datetime-picker';
//import moment from 'moment';
import { useForm } from '../../hooks/useForm';
import { useHistory } from "react-router-dom";









 

//   const startDate = moment();


export const EditarCliente = () => {

    const dispatch = useDispatch();
    const history = useHistory();
  
    //trae el id de activeClient
    const id = useSelector(state => state.clientes.activeClient)

    //busca el cliente del store con el id de activeClient
    //despues le pasa los datos al useForm
    const cliente = useSelector(state => state.clientes.clients.find(client => client.id === id ))
    //console.log(cliente)
    
    
    // const [ dateIngreso, setDateIngreso] = useState( startDate.toDate() );

    const [ editClient, handleEditClientInput ] = useForm({
        dni: cliente.dni,        
        nombreApellido: cliente.nombreApellido,
        email: cliente.email,        
        telefono: cliente.telefono,
        domicilio: cliente.domicilio,
        
    })

    const { dni, nombreApellido, email, telefono, domicilio} = editClient;


    const handleEditClient = (e) => {
        e.preventDefault();
      
            dispatch( startEditClient( editClient ) );
            Swal.fire({
                icon: 'success',
                title: 'OK',
                text: 'Se Actualizo el cliente',            
              })
    
              history.push('/');
        }

    // const fechaIngreso = ( e ) => {
    //     //console.log(e)
    //     setDateIngreso(e);
    // }
    
    
//     const closeModal = () => {
//         //console.log('Closing')
//         dispatch( uiCloseModal() );
// }

    return (
        
        <> 
          
          
    <section className="flex flex-col md:flex-row h-screen items-center">
    <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
                    flex items-center justify-center">
        <div className="w-max h-100" > 
          <h1 className="text-xl text-center md:text-2xl font-bold leading-tight mt-12">Actualizar Cliente</h1>

                <form className="w-96  mt-6" onSubmit={ handleEditClient }>
                <div className="mb-4">
                    <label className="block text-gray-700">DNI</label>
                    <input 
                        type="text" 
                        name="dni"
                        value={ dni }
                        onChange={ handleEditClientInput }
                        placeholder="ingrese DNI" 
                        class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
                </div>
                {/* <div className="mb-4">
                    <label className="block text-gray-700">Fecha de ingreso</label>
                    <DateTimePicker
                        onChange={ fechaIngreso }
                        value={ dateIngreso }
                        className="date"
                    />
                </div> */}
                
                
                <div className="mb-4">
                    <label className="block text-gray-700">Apellido y Nombre</label>
                    <input 
                        type="text" 
                        name="nombreApellido"
                        value={ nombreApellido }
                        onChange={ handleEditClientInput }
                        placeholder="ingrese Apellido y Nombre" 
                        class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
                </div>     
                <div>
                    <label className="block text-gray-700">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={ email }
                        onChange={ handleEditClientInput }
                        placeholder="ingrese su email" 
                        class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
                </div>

                <div class="mt-4">
                    <label className="block text-gray-700">Telefono</label>
                    <input 
                        type="text" 
                        name="telefono"
                        value={ telefono } 
                        onChange={ handleEditClientInput }
                        placeholder="ingrese el telefono" 
                        minlength="6" 
                        class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                        focus:bg-white focus:outline-none" required />
                </div>

                <div class="mt-4">
                    <label className="block text-gray-700">Domicilio</label>
                    <input 
                        type="text" 
                        name="domicilio"
                        value={ domicilio } 
                        onChange={ handleEditClientInput }
                        placeholder="ingrese el domicilio" 
                        minlength="6" 
                        class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                        focus:bg-white focus:outline-none" required />
                </div>                     

                <button 
                    type="submit" 
                    className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                        px-4 py-3 mt-6">Actualizar  Cliente</button>
                </form>
                </div>
                </div>
        </section>

                </>
    )
}
