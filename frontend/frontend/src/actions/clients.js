import { types } from "../types/types";
import { fetchConToken } from "../helpers/fetch";
import { prepareDates } from "../helpers/prepareDates";
import Swal from "sweetalert2";

//establecer el cliente activo
export const setActiveClient = (client) => ({
  type: types.setActiveClient,
  payload: client,
});

//traer todos los clientes de db
export const startGetClients = (page, nombre) => {
  return async (dispatch) => {
    try {
      if (nombre) {
        const resp = await fetchConToken(`clientes/clientes${nombre}`);
        const body = await resp.json();

        const clients = prepareDates(body.clientes);
        const paginasTotales = body.totalPages;

        //lo manda al reducer y el reducer lo manda al estado
        dispatch(clientsLoaded(clients));
        dispatch(numeroPaginas(paginasTotales));
      }
      const resp = await fetchConToken(`clientes/clientes${page}`);
      const body = await resp.json();

      const clients = prepareDates(body.clientes);
      const paginasTotales = body.totalPages;

      //lo manda al reducer y el reducer lo manda al estado
      dispatch(clientsLoaded(clients));
      dispatch(numeroPaginas(paginasTotales));
    } catch (error) {
      console.log(error);
    }
  };
};

//recibe los datos y especifica adonde hay que mandarlos con el payload
const clientsLoaded = (clients) => ({
  type: types.clientGetAll,
  payload: clients,
});

const numeroPaginas = (paginas) => ({
  type: types.clientePaginas,
  payload: paginas,
});

//accion para inicializar proceso de grabacion de nuevo cliente
export const startAddNewClient = (client) => {
  return async (dispatch, getState) => {
    //console.log(client)

    const { uid, name } = getState().auth;

    try {
      const resp = await fetchConToken("clientes", client, "POST");
      const body = await resp.json();
      //console.log(body)

      if (body.ok) {
        client.id = body.cliente.id;
        client.user = {
          _id: uid,
          name: name,
        };
        //console.log(client)
        dispatch(startNewClient(client));
      } else {
        Swal.fire("Error", body.msg, "error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const startNewClient = (client) => ({
  type: types.startNewClient,
  payload: client,
});

//accion para inicializar la edicion de cliente
export const startEditClient = (client) => {
  return async (dispatch, getState) => {
    const id = getState().clientes.activeClient;

    try {
      //console.log(client)
      const resp = await fetchConToken(`clientes/${id}`, client, "PUT");
      const body = await resp.json();
      //console.log(body)

      if (body.ok) {
        dispatch(clientUpdated(client));
      } else {
        Swal.fire("Error", body.msg, "error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const clientUpdated = (client) => ({
  type: types.clientUpdated,
  payload: client,
});

//accion para inicializar la eliminacion de un cliente
export const deleteClient = (id) => {
  return async (dispatch, getState) => {
    //const id = getState().clientes.activeClient;

    try {
      //console.log(client)
      const resp = await fetchConToken(`clientes/${id}`, {}, "DELETE");
      const body = await resp.json();
      //console.log(body)

      if (body.ok) {
        dispatch(clientDeleted());
        dispatch(startGetClients());
      } else {
        Swal.fire("Error", body.msg, "error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const clientDeleted = () => ({
  type: types.clientDeleted,
});
