import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {
    BrowserRouter as Router,
    Redirect,
    Switch,
  } from "react-router-dom";
import { startchecking } from '../actions/auth';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { ScreenEditarCliente } from '../components/taller/ScreenEditarCliente';
import { ScreenNuevoCliente } from '../components/taller/ScreenNuevoCliente';
import { TallerScreen } from '../components/taller/TallerScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';




export const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking, uid } = useSelector( state => state.auth );

    useEffect(() => {
        dispatch( startchecking() );
        
    }, [dispatch])

    if( checking ) {
        return (<h1>Espere...verificando</h1>)
    }

    return (
        <Router>
           <div>
               <Switch>
                    <PublicRoute 
                    exact 
                    path="/login" 
                    component={LoginScreen}
                    isAuthenticated={ !!uid } 
                    />
                    
                    <PrivateRoute 
                        exact path="/" 
                        component={TallerScreen}
                        isAuthenticated={ !!uid } 

                        />

                    <PrivateRoute 
                        exact path="/nuevo-cliente" 
                        component={ ScreenNuevoCliente }
                        isAuthenticated={ !!uid } 

                        />
                    
                    <PrivateRoute 
                        exact path="/editar-cliente" 
                        component={ ScreenEditarCliente }
                        isAuthenticated={ !!uid } 

                        />
                    
                    <PublicRoute 
                        exact 
                        path="/register" 
                        component={RegisterScreen}
                        isAuthenticated={ !!uid } 

                        />

                    <Redirect to="/" />
                    
               </Switch>
           </div>
        </Router>
    )
}
