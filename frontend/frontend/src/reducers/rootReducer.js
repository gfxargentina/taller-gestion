import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { clientReducer } from './clientReducer';
import { uiReducer } from './uiReducer';



export const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    clientes: clientReducer,
})