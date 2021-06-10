import React from 'react'

import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
  } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { TallerScreen } from '../components/taller/TallerScreen';

export const AppRouter = () => {
    return (
        <Router>
           <div>
               <Switch>
                    <Route exact path="/login" component={LoginScreen} />
                    <Route exact path="/" component={TallerScreen} />

                    <Redirect to="/" />
                    
               </Switch>
           </div>
        </Router>
    )
}
