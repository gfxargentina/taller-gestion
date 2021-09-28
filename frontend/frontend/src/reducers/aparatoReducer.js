import { types } from '../types/types';

const initialState = {
	aparatos: [],
	aparatoActivo: null
};

export const aparatoReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.aparatoActivo:
			return {
				...state,
				aparatoActivo: action.payload
			};

		 case types.aparatosGetAll:
		     return {
		         ...state,
		         aparatos: [ ...action.payload ]
		     }

		 case types.aparatoUpdated:
		     return {
		         ...state,
		         aparatos: state.aparatos.map(
		             e => ( e.id === action.payload.id ) ? action.payload : e
		         )
		     }

		 case types.aparatoDeleted:
			return {
				...state,
				clients: state.aparatos.filter(
					e => ( e.id !== state.activeClient ) 
				),
				aparatoActivo: null
			}

		default:
			return state;
	}
};
