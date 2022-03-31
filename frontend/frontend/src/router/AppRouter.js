import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import { startchecking } from "../actions/auth";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { ScreenEditarCliente } from "../components/taller/ScreenEditarCliente";
import { ScreenNuevoCliente } from "../components/taller/ScreenNuevoCliente";
import { ScreenAparatos } from "../components/taller/ScreenAparatos";
import { TallerScreen } from "../components/taller/TallerScreen";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { NuevoAparato } from "../components/taller/NuevoAparato";
import { ScreenNuevoAparato } from "../components/taller/ScreenNuevoAparato";
import { ScreenDetalleAparato } from "../components/taller/ScreenDetalleAparato";
import { ScreenEditarAparato } from "../components/taller/ScreenEditarAparato";
import { FacturaAparato } from "../components/ui/FacturaAparato";
import { AparatosScreen } from "../components/taller/AparatosScreen";
import { ScreenDetalleAparato2 } from "../components/taller/ScreenDetalleAparato2";
import { EditarAparato2 } from "../components/taller/EditarAparato2";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking, uid } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startchecking());
  }, [dispatch]);

  if (checking) {
    return <h1>Espere...verificando</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={LoginScreen}
            isAuthenticated={!!uid}
          />

          <PrivateRoute
            exact
            path="/clientes"
            component={TallerScreen}
            isAuthenticated={!!uid}
          />

          <PrivateRoute
            exact
            path="/aparatos2"
            component={AparatosScreen}
            isAuthenticated={!!uid}
          />

          <PrivateRoute
            exact
            path="/nuevo-cliente"
            component={ScreenNuevoCliente}
            isAuthenticated={!!uid}
          />

          <PrivateRoute
            exact
            path="/editar-cliente"
            component={ScreenEditarCliente}
            isAuthenticated={!!uid}
          />

          <PrivateRoute
            exact
            path="/aparatos"
            component={ScreenAparatos}
            isAuthenticated={!!uid}
          />

          <PrivateRoute
            exact
            path="/nuevo-aparato"
            component={ScreenNuevoAparato}
            isAuthenticated={!!uid}
          />

          <PrivateRoute
            exact
            path="/detalle-aparato"
            component={ScreenDetalleAparato}
            isAuthenticated={!!uid}
          />

          <PrivateRoute
            exact
            path="/detalle-aparato2"
            component={ScreenDetalleAparato2}
            isAuthenticated={!!uid}
          />

          <PrivateRoute
            exact
            path="/editar-aparato"
            component={ScreenEditarAparato}
            isAuthenticated={!!uid}
          />

          <PrivateRoute
            exact
            path="/editar-aparato2"
            component={EditarAparato2}
            isAuthenticated={!!uid}
          />

          <PrivateRoute
            exact
            path="/factura-aparato/:aparatoId"
            component={FacturaAparato}
            isAuthenticated={!!uid}
          />

          <PublicRoute
            exact
            path="/register"
            component={RegisterScreen}
            isAuthenticated={!!uid}
          />

          <Redirect to="/clientes" />
        </Switch>
      </div>
    </Router>
  );
};
