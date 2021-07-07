import { types } from "../types/types";



const initialState = { 
    aparatos: [],
    activeAparato: null
}

export const aparatoReducer = ( state = initialState, action ) => {

    switch (action.type) {

        // case types.setActiveAparato:
        //     return {
        //         ...state,
        //         activeAparato: action.payload 
        //     }

            

        // case types.clientGetAll:
        //     return {
        //         ...state,
        //         clients: [ ...action.payload ]
        //     }

        // case types.clientUpdated:
        //     return {
        //         ...state,
        //         clients: state.clients.map(
        //             e => ( e.id === action.payload.id ) ? action.payload : e
        //         )
        //     }
        
    
        default:
            return state;
    }
}

