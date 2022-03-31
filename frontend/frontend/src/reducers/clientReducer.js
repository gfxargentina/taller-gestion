import { types } from "../types/types";

const initialState = {
  clients: [],
  activeClient: null,
};

export const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setActiveClient:
      return {
        ...state,
        activeClient: action.payload,
      };

    case types.clientGetAll:
      return {
        ...state,
        clients: [...action.payload],
      };

    case types.clientePaginas:
      return {
        ...state,
        paginaTotales: action.payload,
      };

    case types.clientUpdated:
      return {
        ...state,
        clients: state.clients.map((e) =>
          e.id === action.payload.id ? action.payload : e
        ),
      };

    case types.clientDeleted:
      return {
        ...state,
        clients: state.clients.filter((e) => e.id !== state.activeClient),
        activeClient: null,
      };

    default:
      return state;
  }
};
