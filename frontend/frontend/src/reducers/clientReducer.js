import { types } from "../types/types";



const initialState = { 
    clients: []
}

export const clientReducer = ( state = initialState, action ) => {

    switch (action.type) {
        case types.clientGetAll:
            return {
                ...state,
                cliente: [ ...action.payload ]
            }
    
        default:
            return state;
    }
}