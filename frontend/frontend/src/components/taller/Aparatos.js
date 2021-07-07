import React from 'react'
import { Link } from 'react-router-dom'

export const Aparatos = () => {
    return (
        <div>
            <Link to="/nuevo-aparato">
                  <button class="h-10 px-5 mt-5 mb-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline 
                              hover:bg-indigo-500 hover:text-indigo-100">Nuevo Aparato</button>
                  </Link>
        </div>
    )
}
