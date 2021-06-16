import { fetchSinToken, fetchConToken } from "../helpers/fetch"
import { types } from "../types/types";
import Swal from 'sweetalert2'


//login
export const startLogin = ( email, password ) => {
    return async( dispatch ) => {
        //verificar si llegan el email y pass
        //console.log(email, password)

        const resp = await fetchSinToken( 'auth', { email, password }, 'POST' );
        const body = await resp.json();
        //console.log(body)

        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch ( login({
                uid: body.uid,
                name: body.name
            }))
        } else {
            Swal.fire('Error', body.msg, 'error')

        }
    }
}

//registo de nuevo usuario 

export const startRegister = ( nombre , email, password ) => {
    return async( dispatch ) => {
        const resp = await fetchSinToken( 'auth/new', { nombre, email, password }, 'POST' );
        const body = await resp.json();
        //console.log(body)

        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch ( login({
                uid: body.uid,
                name: body.nombre
            }))
        } else {
            Swal.fire('Error', body.msg, 'error')

        }
     } 
}

export const startchecking = () => {
    return async(dispatch) => {
        const resp = await fetchConToken( 'auth/renew' );
        const body = await resp.json();
        //console.log(body)

        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch ( login({
                uid: body.uid,
                name: body.nombre
            }))
        } else {           
            dispatch( checkingFinish() );

        }
    }
}

const checkingFinish = () => ({
    type: types.authCheckingFinish
})

const login = ( user ) => ({
    type: types.authLogin,
    payload: user
})

//funcion para salir
export const startLogout = () => {
    return ( dispatch ) => {
        //limpia el storage
        localStorage.clear();
        dispatch( logout() );
    }
}

const logout = () => ({
    type: types.authLogout
})
