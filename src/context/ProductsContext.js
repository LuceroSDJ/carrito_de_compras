import {createContext} from 'react';
import ProductsState from './ProductsState';

// we have to create context in order to tap into ContextProvider,
// which wraps selected components and provides them access to the global state values.
const ProductsContext = createContext(null); //returns an abject 
console.log(ProductsState);

export default ProductsContext;