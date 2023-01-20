import React, { useContext, useEffect } from 'react';
import ProductsContext from '../context/ProductsContext';


const Checkout = () => {
    
    const ctx = useContext(ProductsContext);
    const {checkout, total, actualizarTotal} = ctx;

    useEffect(() => {
        actualizarTotal();
    }, [checkout])

    return (
      <div className="w-2/5 mb-8">
        <div className="flex justify-center lg:justify-end">
          <div className="border max-w-md w-full px-20 pt-3 pb-10">
            <div className="flex flex-row-reverse justify-between mt-6">
              <div className="">
                <h3 className="font-extrabold text-gray-600">
                  Precio Total
                </h3>
              </div>
            </div>

            {checkout.map((helado, i) => {
                return(
                    <div>
                        <span>{helado.cantidad}</span>
                        <h3>{helado.nombre}</h3>
                        <h3>{`${helado.precio * helado.cantidad} USD`}</h3>
                    </div>
                )
            })}

            <div className="flex items-center justify-between mt-10">
              <h3 className="text-gray-600">Total de la orden: {`$${total} USD`} </h3>
            </div>

            <button type="button" className="btn-indigo">
              Pagar
            </button>
          </div>
        </div>
      </div>
    );
}

export default Checkout;