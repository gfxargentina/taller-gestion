import { types } from "../types/types";



const initialState = { 
    clients: [],
    hayClientes: null
}

export const clientReducer = ( state = initialState, action ) => {

    switch (action.type) {
        case types.clientGetAll:
            return {
                ...state,
                clients: [ ...action.payload ]
            }
        
    
        default:
            return state;
    }
}

