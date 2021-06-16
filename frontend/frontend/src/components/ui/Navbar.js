import { Fragment } from 'react'
import { Disclosure, Menu } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth'

const navigation = ['Inicio', 'Clientes', 'Aparatos', 'Reportes']
const profile = ['Tu perfil', 'configuración', 'Salir']



export const Navbar = () => {

    const { name } = useSelector(state => state.auth)
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch( startLogout() );
        
    }

    return (
        <>
            <div>
            <Disclosure as="nav" className="bg-gray-800">
                {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img
                            className="h-8 w-8"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                            alt="Workflow"
                            />
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                            {navigation.map((item, itemIdx) =>
                                itemIdx === 0 ? (
                                <Fragment key={item}>
                                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                    <a href="ex" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                                    {item}
                                    </a>
                                </Fragment>
                                ) : (
                                <a
                                    key={item}
                                    href="ex"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    {item}
                                </a>
                                )
                            )}
                            </div>
                        </div>
                        </div>
                        <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">                           

                            {/* Boton Salir */}
                            <Menu as="div" className="ml-3 relative">
                                <span className="text-yellow-600"> { name } </span>
                                    <button
                                        onClick={ handleLogout } 
                                        className="h-8 px-4 m-2 text-white  bg-red-500 hover:bg-red-700 rounded-lg "
                                        >Salir</button>
                            </Menu>
                        </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                        {/* Mobile menu button */}
                        <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            {open ? (
                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </Disclosure.Button>
                        </div>
                    </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navigation.map((item, itemIdx) =>
                        itemIdx === 0 ? (
                            <Fragment key={item}>
                            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                            <a href="ex" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">
                                {item}
                            </a>
                            </Fragment>
                        ) : (
                            <a
                            key={item}
                            href="ex"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                            {item}
                            </a>
                        )
                        )}
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-700">
                        <div className="flex items-center px-5">
                        <div className="flex-shrink-0">
                            <img
                            className="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                            />
                        </div>
                        <div className="ml-3">
                            <div className="text-base font-medium leading-none text-white">Tom Cook</div>
                            <div className="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
                        </div>
                        <button className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                        </div>
                        <div className="mt-3 px-2 space-y-1">
                        {profile.map((item) => (
                            <a
                            key={item}
                            href="ex"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                            >
                            {item}
                            </a>
                        ))}
                        </div>
                    </div>
                    </Disclosure.Panel>
                </>
                )}
            </Disclosure>

                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Inicio</h1>
                    </div>
                </header>
                <main>
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    {/* Replace with your content */}
                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
                    </div>
                    {/* /End replace */}
                    </div>
                </main>
                </div>    
        </>         
        
    )
}
