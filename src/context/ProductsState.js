// aqui en este "CUSTOM HOOK" armamos la estructura de el estado global
import React, {useReducer} from 'react';
import ProductsContext from './ProductsContext';
import ProductsReducer from './ProductsReducer';

//estan function nos va a permitir "gestionar" el estado global
//gestionar = manage
const ProductsState = props => {
    //generan estado inicial
    const initialState = {
        helados: [
            {
                id: 1,
                nombre:"Helado sencillo",
                precio: 2,
                img: "/anna-ribes-alEZLDPPRBU-unsplash.jpg"
            },
            {
                id: 2,
                nombre:"Helado doble",
                precio: 3.50,
                img: "/rachael-gorjestani-HLt6jQLf_J0-unsplash.jpg"
            },
            {
                id: 3,
                nombre:"Helado triple",
                precio: 4.50,
                img: "/sarah-gualtieri-tr9GO9WXNRI-unsplash.jpg"
            },
            {
                id: 4,
                nombre:"Malteada",
                precio: 2,
                img: "/natalie-toombs-KwCaIGKdlps-unsplash.jpg"
            },
        ],
        checkout: [], //los productos q vamos a ir agregando al carrito
        total: 0  //precio total de todos los helados
    };
    //ahora aqui hacemos una destructuracion de arreglos
    //para agarrar el estado q vamos a poder manipular y dispatch (las acciones q nos permitiral conectar con los 
    //reducer to modify the state)
    const [state, dispatch] = useReducer(ProductsReducer, initialState); 

    //ahora vamos a crear los dispatchers: dos functions con las q el user va apoder interactuar con los reducers
    const agregarHeladoAlCarrito = (datos) => {
        //establecer valor inicial, con cantidad 1
        let nuevosDatos = {
            ...datos,  //va a pasar todos los datos q estamos pasando
            cantidad: 1  //y vamos a pasar una prooiedad y valor nueva
        }

        //verifica si ya existe un helado con el id dentro del checkout
        const coincidenciaID = state.checkout.find((e) => {  //find loops through all the items in the checkout/shopping cart
            return e.id === datos.id
        })

        //si existe la coincidencia, acumulemos su cantidad precia con una addicional
        if(coincidenciaID !== undefined) {
            //re-define nuevos datos
            nuevosDatos = {
                ...datos,
                cantidad: coincidenciaID.cantidad +=1  //override existing cantidad value
            }
        }
    }
    const actualizarTotal = () => {}

    return (
        //todos los components q esten encapsulados en el provider van a recibir estos datos.
        //then we pass an object to the property "value"
        <ProductsContext.Provider value={
            {
                helados: state.helados,
                agregarHeladoAlCarrito
            }
        }
        >
            {props.children}
        </ProductsContext.Provider>
    )

}

export default ProductsState;