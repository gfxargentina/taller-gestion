import React from 'react';
//import { useSelector } from 'react-redux';
import { Clientes } from '../ui/Clientes';
import { Navbar }from '../ui/Navbar';
//import { NoHayClientes } from './NoHayClientes';



export const TallerScreen = () => {

    //const { active } = useSelector(state => state.clientes)

    return (
        <div>
            <Navbar />
            <Clientes />
            {/* {
                ( active ) ? ( <Clientes />  ) : ( <NoHayClientes /> )
            }             */}
                 
        </div>
    )
}
