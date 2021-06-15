import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';



export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [ formLogin, handleLoginInput ] = useForm({
        loginEmail: 'luis@gmail.com',
        loginPassword: '12345678'
    })

    const { loginEmail, loginPassword } = formLogin;

    const handleLogin = (e) => {
        e.preventDefault();
        //console.log(formLogin)
        dispatch( startLogin( loginEmail, loginPassword ) );
    }



    return (
        <>
        <section className="flex flex-col md:flex-row h-screen items-center">

                <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                <img src="https://source.unsplash.com/weekly?tech" alt="" className="w-full h-full object-cover"/>
                </div>

                <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
                    flex items-center justify-center">

                <div className="w-full h-100">


                    <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Ingrese a su cuenta</h1>

                    <form className="mt-6" onSubmit={ handleLogin }>
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input 
                            type="email" 
                            name="loginEmail"
                            value={ loginEmail }
                            onChange={ handleLoginInput } 
                            placeholder="ingrese su email" 
                            class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
                    </div>

                    <div class="mt-4">
                        <label className="block text-gray-700">Contraseña</label>
                        <input 
                            type="password" 
                            name="loginPassword"
                            value={ loginPassword } 
                            onChange={ handleLoginInput }
                            placeholder="ingrese su contraseña" 
                            minlength="8" 
                            class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                            focus:bg-white focus:outline-none" required />
                    </div>

                    <div className="text-right mt-2">
                        <a href="example" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
                    </div>

                    <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                            px-4 py-3 mt-6">Ingresar</button>
                    </form>

                    <hr className="my-6 border-gray-300 w-full" />                   

                    <p className="mt-8">No tiene cuenta?</p> <Link className="text-blue-500 hover:text-blue-700 font-semibold" to="/register" >Crear una cuenta</Link>
                </div>
                </div>

</section>
        </>
    )
}
