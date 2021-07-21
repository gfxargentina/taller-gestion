import { combineReducers } from 'redux';
import { aparatoReducer } from './aparatoReducer';
import { authReducer } from './authReducer';
import { clientReducer } from './clientReducer';
import { uiReducer } from './uiReducer';

export const rootReducer = combineReducers({
	auth: authReducer,
	ui: uiReducer,
	clientes: clientReducer,
	aparatos: aparatoReducer
});
