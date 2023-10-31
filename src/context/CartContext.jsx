import { createContext, useState } from 'react';
import React from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
	//* Espacio para crear estados, cariables, funciones, etc

	const [cart, setCart] = useState([]);
	console.log('const cart', cart);

	const addProduct = (filteredProduct, counter) => {
		if (!counter) {
			alert('Agregue cantidad de productos');
		} else if (cart.length > 0) {
			const idsInCart = cart.map((product) => product.id);
			if (idsInCart.includes(filteredProduct.id)) {
				alert('Ok');
				const matchingProduct = cart.find(
					(inCart) => inCart.id === filteredProduct.id
				);
				const newQuantity = (matchingProduct.quantity += filteredProduct.quantity);

				filteredProduct.quantity = newQuantity;
				filteredProduct.totalPrice = newQuantity * filteredProduct.price;
				const matchingProductIndex = cart.indexOf(matchingProduct);
				cart.splice(matchingProductIndex, 1);

				setCart((prevCart) => [...prevCart, filteredProduct]);
			} else {
				setCart((prevCart) => [...prevCart, filteredProduct]);
			}
		} else {
			setCart((prevCart) => [...prevCart, filteredProduct]);
			console.log(cart);
		}
	};

	return (
		<CartContext.Provider value={{ cart, setCart, addProduct }}>
			{children}
		</CartContext.Provider>
	);
};
export default CartProvider;
