import React from 'react'
import { Link } from 'react-router-dom'
import { GetAparatos } from '../ui/GetAparatos'

export const Aparatos = () => {
    return (
        <div className="flex flex-col container mx-auto">
            <Link to="/nuevo-aparato">
                  <button class="h-10 px-5 mt-5 mb-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline 
                              hover:bg-indigo-500 hover:text-indigo-100">Nuevo Aparato</button>
                  </Link>

                  <GetAparatos />
        </div>
    )
}
