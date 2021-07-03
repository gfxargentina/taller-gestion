import React from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { startEditClient } from '../../actions/clients';
import { uiCloseModal } from '../../actions/ui';
//import DateTimePicker from 'react-datetime-picker';
//import moment from 'moment';
import { useForm } from '../../hooks/useForm';





//posiciona el modal en el medio
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  //conectar el modal con tu app
//   Modal.setAppElement('#root');

//   const startDate = moment();


export const ClientModal = () => {

    const dispatch = useDispatch();
    const {modalOpen} = useSelector(state => state.ui)
    const  {activeClient}  = useSelector(state => state.clientes)
    
    // const [ dateIngreso, setDateIngreso] = useState( startDate.toDate() );

    const [ editClient, handleEditClientInput ] = useForm({
        id: activeClient,
        dni: '',        
        nombreApellido: '',
        email: '',        
        telefono: '',
        domicilio: '',
        
    })

    const { id, dni, nombreApellido, email, telefono, domicilio} = editClient;

    const handleEditClient = (e) => {
        e.preventDefault();
      
            dispatch( startEditClient( editClient ) )
            
      
        
    }

    // const fechaIngreso = ( e ) => {
    //     //console.log(e)
    //     setDateIngreso(e);
    // }
    
    
    const closeModal = () => {
        //console.log('Closing')
        dispatch( uiCloseModal() );
        
    }

    return (
        <Modal
             isOpen={ modalOpen }
    //         // onAfterOpen={afterOpenModal}
             onRequestClose={ closeModal }
             style={customStyles}
             closeTimeoutMS={ 200 }
    //         //overlayClassName="overlay"
             contentLabel="Example Modal"
       >
          
          

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
                    <label className="block text-gray-700">ID</label>
                    <input 
                        type="text" 
                        name="nombreApellido"
                        value={ id }
                        onChange={ handleEditClientInput }
                        placeholder="ingrese Apellido y Nombre" 
                        class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
                </div>   
                
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
                        px-4 py-3 mt-6">Editar  Cliente</button>
                </form>
                </div>


      </Modal>
    )
}
