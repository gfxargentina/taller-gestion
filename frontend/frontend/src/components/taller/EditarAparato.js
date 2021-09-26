import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
//import DateTimePicker from 'react-datetime-picker';
//import moment from 'moment';
import { useForm } from '../../hooks/useForm';
import { useHistory } from "react-router-dom";
import { startEditAparato } from '../../actions/aparatos';









 

//   const startDate = moment();


export const EditarAparato = () => {

    const dispatch = useDispatch();
    const history = useHistory();
  
    //trae el id de activeClient
    const id = useSelector(state => state.clientes.activeClient)

    //busca el cliente del store con el id de activeClient
    //despues le pasa los datos al useForm
     const aparatoCliente = useSelector(state => state.clientes.clients.find(aparato => aparato.id === id ))
     console.log(aparatoCliente.aparatos)

     //trae el id del aparatoActivo
     const idAparato = useSelector(state => state.aparatos.aparatoActivo)
     console.log(idAparato)
    
    //busca el aparato del store con el id de aparatoActivo
    //despues le pasa los datos al useForm
     const aparatoModificar = aparatoCliente.aparatos.find(aparato => aparato._id === idAparato )
     //console.log(aparatoModificar)


     
    
    
    // const [ dateIngreso, setDateIngreso] = useState( startDate.toDate() );

    const [ editAparato, handleEditAparatoInput ] = useForm({
        fechaEntrada: aparatoModificar.fechaEntrada,        
        fechaSalida: aparatoModificar.fechaSalida,
        aparato: aparatoModificar.aparato,        
        falla: aparatoModificar.falla,
        presupuesto: aparatoModificar.presupuesto,
        garantia: aparatoModificar.garantia
        
    })

    const { fechaEntrada, fechaSalida, aparato, falla, presupuesto, garantia } = editAparato;


    const handleEditAparato = (e) => {
        e.preventDefault();
      
            try {
                dispatch( startEditAparato( editAparato ) );
                Swal.fire({
                icon: 'success',
                title: 'OK',
                text: 'Se Actualizo el Aparato',            
              })
    
              history.push('/');
            } catch (error) {
                console.log(error)
                
            }
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
          <h1 className="text-xl text-center md:text-2xl font-bold leading-tight mt-12">Modificar Aparato</h1>

                <form className="w-96  mt-6" onSubmit={ handleEditAparato }>
                <div className="mb-4">
                    <label className="block text-gray-700">Fecha de Entrada</label>
                    <input 
                        type="text" 
                        name="fechaEntrada"
                        value={ fechaEntrada }
                        onChange={ handleEditAparatoInput }
                        placeholder="Fecha de entrada del aparato" 
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
                    <label className="block text-gray-700">Fecha de Salida</label>
                    <input 
                        type="text" 
                        name="fechaSalida"
                        value={ fechaSalida }
                        onChange={ handleEditAparatoInput }
                        placeholder="Fecha de salida del Aparato" 
                        class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
                </div>     
                <div>
                    <label className="block text-gray-700">Aparato</label>
                    <input 
                        type="text" 
                        name="aparato" 
                        value={ aparato }
                        onChange={ handleEditAparatoInput }
                        placeholder="Ingrese la marca y modelo del Aparato" 
                        class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
                </div>

                <div class="mt-4">
                    <label className="block text-gray-700">Falla</label>
                    <input 
                        type="text" 
                        name="falla"
                        value={ falla } 
                        onChange={ handleEditAparatoInput }
                        placeholder="ingrese la falla del Aparato" 
                        minlength="6" 
                        class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                        focus:bg-white focus:outline-none" required />
                </div>

                <div class="mt-4">
                    <label className="block text-gray-700">Presupuesto</label>
                    <input 
                        type="text" 
                        name="presupuesto"
                        value={ presupuesto } 
                        onChange={ handleEditAparatoInput }
                        placeholder="ingrese el presupuesto" 
                        minlength="6" 
                        class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                        focus:bg-white focus:outline-none" required />
                </div> 

                <div class="mt-4">
                    <label className="block text-gray-700">Garantia</label>
                    <input 
                        type="text" 
                        name="garantia"
                        value={ garantia } 
                        onChange={ handleEditAparatoInput }
                        placeholder="Ingrese la garantia" 
                        minlength="6" 
                        class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                        focus:bg-white focus:outline-none" required />
                </div>                     

                <button 
                    type="submit" 
                    className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                        px-4 py-3 mt-6">Actualizar Aparato</button>
                </form>
                </div>
                </div>
        </section>

                </>
    )
}
