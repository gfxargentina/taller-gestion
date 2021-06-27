
import { types } from "../types/types";
import { fetchConToken } from "../helpers/fetch";
import { prepareDates } from "../helpers/prepareDates";

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




