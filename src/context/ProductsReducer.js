import { AGREGAR_HELADO, ACTUALIZAR_TOTAL } from "../types";

// const ProductsReducer = () => {

// }


// export default ProductsReducer;

export default (state, action) => {
    switch(action.type) {
        // cuando el reducer reciba un dispat con "AGREGAR_HELADO", queremos modificar el estado global : checkout value 
        case AGREGAR_HELADO:
            return {
                ...state,
                checkout: action.payload
            }
        case ACTUALIZAR_TOTAL:
            return {
                ...state,
                total: action.payload
            }
        default:
            return state;
    }
}