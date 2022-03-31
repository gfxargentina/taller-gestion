import React from "react";
import { Link } from "react-router-dom";

export const NoHayClientes = () => {
  return (
    <div>
      <h1>No hay clientes en la base de datos, agregue uno</h1>
      <Link to="/nuevo-cliente">
        <button
          className="h-10 px-5 mt-5 mb-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline 
                              hover:bg-indigo-500 hover:text-indigo-100"
        >
          Nuevo Cliente
        </button>
      </Link>
    </div>
  );
};
