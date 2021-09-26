import { types } from '../types/types';

const initialState = {
	//aparatos: [],
	aparatoActivo: null
};

export const aparatoReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.aparatoActivo:
			return {
				...state,
				aparatoActivo: action.payload
			};

		// case types.clientGetAll:
		//     return {
		//         ...state,
		//         clients: [ ...action.payload ]
		//     }

		 case types.aparatoUpdated:
		     return {
		         ...state,
		         aparatos: state.aparatos.map(
		             e => ( e.id === action.payload.id ) ? action.payload : e
		         )
		     }

		default:
			return state;
	}
};
