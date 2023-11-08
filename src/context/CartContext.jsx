import { createContext, useState } from 'react';
import React from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
	//* Espacio para crear estados, cariables, funciones, etc

	const [cart, setCart] = useState([]);
	const [size, setSize] = useState(0);
	console.log('const cart', cart);
	console.log(size);
	const addProduct = (filteredProduct, counter) => {
		if (!counter) {
			alert('Agregue cantidad de productos');
		} else if (cart.length > 0) {
			const idsInCart = cart.map((product) => product.id);
			if (idsInCart.includes(filteredProduct.id)) {
				const matchingProduct = cart.find(
					(inCart) => inCart.id === filteredProduct.id
				);
				const newQuantity = (matchingProduct.quantity += filteredProduct.quantity);

				filteredProduct.quantity = newQuantity;
				filteredProduct.totalPrice = newQuantity * filteredProduct.price;
				const matchingProductIndex = cart.indexOf(matchingProduct);
				cart.splice(matchingProductIndex, 1);

				setCart((prevCart) => [...prevCart, filteredProduct]);
				alert('Producto actualizado');
			} else {
				setCart((prevCart) => [...prevCart, filteredProduct]);
				alert('Producto agregado al carrito');
			}
		} else {
			setCart((prevCart) => [...prevCart, filteredProduct]);
			alert('Producto agregado al carrito');

			console.log(cart);
		}
	};

	const removeProduct = (inCartID) => {
		const cartUpdated = cart.filter((product) => product.id !== inCartID);
		setCart(cartUpdated);
	};

	const cleanCart = () => {
		setCart([]);
	};

	return (
		<CartContext.Provider
			value={{ cart, setCart, addProduct, removeProduct, cleanCart, size, setSize }}>
			{children}
		</CartContext.Provider>
	);
};
export default CartProvider;
