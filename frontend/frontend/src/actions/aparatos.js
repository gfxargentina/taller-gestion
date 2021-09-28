import { types } from '../types/types';
import { fetchConToken } from '../helpers/fetch';
//import { prepareDates } from "../helpers/prepareDates";
import Swal from 'sweetalert2';
import { prepareDates } from '../helpers/prepareDates';
import { startGetClients } from './clients';


//establecer el aparato activo en el store
export const aparatoActivo = (aparato) => ({
	type: types.aparatoActivo,
	payload: aparato
});

//traer todos los aparatos de db
export const startGetAparatos = () => {
    return async(dispatch) => {
        //verificar que llega ok
        //console.log('start get all clients')
        
        try {
            const resp = await fetchConToken('aparatos');
            const body = await resp.json();
            

            const aparatos = prepareDates(body.aparatos);
            //console.log(clients)
           

            dispatch ( aparatosLoaded( aparatos ));
            

        } catch (error) {
            console.log(error)
        }
        
    }
}

const aparatosLoaded = ( aparatos ) => ({
    type: types.aparatosGetAll,
    payload: aparatos
})

//accion para inicializar proceso de grabacion de nuevo cliente
export const startAddNewAparato = (aparato) => {
	return async (dispatch, getState) => {
		//console.log(aparato)

		const id = getState().clientes.activeClient;

		try {
			//console.log(aparato)
			const resp = await fetchConToken(`aparatos/${id}`, aparato, 'POST');
			const body = await resp.json();
			//console.log(body)

			if (body.ok) {
				dispatch(startNewAparato(aparato));
			} else {
				Swal.fire('Error', body.msg, 'error');
				
			}
		} catch (error) {
			console.log(error);
		}
	};
};

const startNewAparato = (aparato) => ({
	type: types.startNewAparato,
	payload: aparato
});

//EDITAR UN APARATO
export const startEditAparato = ( aparato ) => { 
	return async(dispatch, getState) => {

	   const id = getState().aparatos.aparatoActivo;
	   //console.log(id)
		try {
		   //console.log(aparato)     
			  const resp = await fetchConToken( `aparatos/actualizar/${ id }`, aparato, 'PUT' );
			  const body = await resp.json();
			  //console.log(body)

			  if ( body.ok ) {
				  dispatch( aparatoUpdated( aparato ) );
			  } else {
			   Swal.fire('Error', body.msg , 'error');
			  }

		} catch (error) {
			console.log(error)
		   
		}
	}
}

const aparatoUpdated = ( aparato ) => ({ 
   type: types.aparatoUpdated,
   payload: aparato
});

//accion para inicializar la eliminacion de un aparato
export const deleteAparato = (id) => { 
    return async(dispatch, getState) => {

       //const id = getState().clientes.activeClient;
       
        try {
           //console.log(client)     
              const resp = await fetchConToken( `aparatos/borrar/${ id }`, {}, 'DELETE' );
              const body = await resp.json();
              //console.log(body)

              if ( body.ok ) {
                  dispatch( aparatoDeleted() );
                  dispatch( startGetClients() );
              } else {
               Swal.fire('Error', body.msg , 'error');
              }

        } catch (error) {
            console.log(error)
           
        }
    }
}

const aparatoDeleted = () => ({
    type: types.aparatoDeleted
})
