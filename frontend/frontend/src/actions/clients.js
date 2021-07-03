
import { types } from "../types/types";
import { fetchConToken } from "../helpers/fetch";
import { prepareDates } from "../helpers/prepareDates";
import Swal from "sweetalert2";

//establecer el cliente activo
export const setActiveClient = ( id, client ) => ({
    type: types.setActiveClient,
    payload: client
})

//traer todos los clientes de db
export const startGetClients = () => {
    return async(dispatch) => {
        //verificar que llega ok
        //console.log('start get all clients')
        
        try {
            const resp = await fetchConToken('clientes');
            const body = await resp.json();
            

            const clients = prepareDates(body.clientes);
            //console.log(clients)
           

            dispatch ( clientsLoaded( clients ));
            

        } catch (error) {
            console.log(error)
        }
        
    }
}

const clientsLoaded = ( clients ) => ({
    type: types.clientGetAll,
    payload: clients
})

//accion para inicializar proceso de grabacion de nuevo cliente
export const startAddNewClient = ( client ) => {
    return async( dispatch, getState ) => {
            console.log(client)

            const { uid, name } = getState().auth;

            try {
                const resp = await fetchConToken( 'clientes', client , 'POST' );
                const body = await resp.json();
                console.log(body)

                if ( body.ok ) {
                    client.id = body.cliente.id;
                    client.user = {
                        _id: uid,
                        name: name
                    }
                    console.log(client)
                    dispatch( startNewClient( client ) );
                }

                
                
            } catch (error) {
                console.log(error)
            }
            
    
            
    }
}

const startNewClient = ( client ) => ({ 
    type: types.startNewClient,
    payload: client

})

//accion para inicializar la edicion de cliente
 export const startEditClient = ( client ) => { 
     return async(dispatch) => {
        
         try {
            //console.log(client)     
               const resp = await fetchConToken( `clientes/${ client.id }`, client, 'PUT' );
               const body = await resp.json();
               //console.log(body)

               if ( body.ok ) {
                   dispatch( clientUpdated( client ) );
               } else {
                Swal.fire('Error', body.msg , 'error');
               }

         } catch (error) {
             console.log(error)
            
         }
     }
 }

const clientUpdated = ( client ) => ({ 
    type: types.clientUpdated,
    payload: client
});




