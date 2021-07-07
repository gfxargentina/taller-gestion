import { types } from "../types/types";
import { fetchConToken } from "../helpers/fetch";
//import { prepareDates } from "../helpers/prepareDates";
import Swal from "sweetalert2";

//accion para inicializar proceso de grabacion de nuevo cliente
export const startAddNewAparato = ( aparato ) => {
    return async( dispatch, getState ) => {
            //console.log(aparato)

            const id = getState().clientes.activeClient;
        
            try {
               //console.log(aparato)     
                  const resp = await fetchConToken( `aparatos/${ id }`, aparato, 'POST' );
                  const body = await resp.json();
                  //console.log(body)
   
                  if ( body.ok ) {
                      dispatch( startNewAparato( aparato ) );
                  } else {
                   Swal.fire('Error', body.msg , 'error');
                  }
   
            } catch (error) {
                console.log(error)
               
            }
            
    
            
    }
}

const startNewAparato = ( aparato ) => ({ 
    type: types.startNewAparato,
    payload: aparato

})