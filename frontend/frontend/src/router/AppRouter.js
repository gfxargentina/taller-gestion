import React from 'react'

import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
  } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { TallerScreen } from '../components/taller/TallerScreen';


export const AppRouter = () => {
    return (
        <Router>
           <div>
               <Switch>
                    <Route exact path="/login" component={LoginScreen} />
                    <Route exact path="/" component={TallerScreen} />
                    <Route exact path="/register" component={RegisterScreen} />

                    <Redirect to="/" />
                    
               </Switch>
           </div>
        </Router>
    )
}
