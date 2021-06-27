import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { clientReducer } from './clientReducer';



export const rootReducer = combineReducers({
    auth: authReducer,
    clientes: clientReducer,
})