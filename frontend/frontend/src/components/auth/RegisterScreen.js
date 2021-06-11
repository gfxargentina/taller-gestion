import React from 'react'
import { Link } from 'react-router-dom'


export const RegisterScreen = () => {
    return (
        <>
          <section className="flex flex-col md:flex-row h-screen items-center">

                <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                <img src="https://source.unsplash.com/weekly?repair" alt="" className="w-full h-full object-cover"/>
                </div>

                <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
                    flex items-center justify-center">

                <div className="w-full h-100">


                    <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Registre una nueva cuenta</h1>

                    <form className="mt-6" action="#" method="POST">
                    <div className="mb-4">
                        <label className="block text-gray-700">Nombre y Apellido</label>
                        <input type="text" name="nombre" id="" placeholder="ingrese su nombre y apellido" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
                    </div>   
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input type="email" name="" id="" placeholder="ingrese su email" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
                    </div>

                    <div class="mt-4">
                        <label className="block text-gray-700">Contraseña</label>
                        <input type="password" name="" id="" placeholder="ingrese su contraseña" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                            focus:bg-white focus:outline-none" required />
                    </div>                    

                    <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                            px-4 py-3 mt-6">Registrar</button>
                    </form>

                    <hr className="my-6 border-gray-300 w-full" />                   

                    <p className="mt-8">Ya tiene cuenta?</p> <Link className="text-blue-500 hover:text-blue-700 font-semibold" to="/login" >Ingrese a su cuenta</Link>
                </div>
                </div>

</section>  
        </>
    )
}
