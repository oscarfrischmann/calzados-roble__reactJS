import { createContext, useState } from 'react';
import React from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
	//* Espacio para crear estados, cariables, funciones, etc
	console.log(children);

	let [cart, setCart] = useState([]);
	//!POr qué hay un useState si  cart se setea con push?
	//! setCart(cart.push(productToCart)); o falta un useEffect?

	const addProduct = (prod) => {
		cart.push(prod);
		console.log(cart);
	};

	return (
		<CartContext.Provider value={{ cart, setCart, addProduct }}>
			{children}
		</CartContext.Provider>
	);
};
export default CartProvider;
