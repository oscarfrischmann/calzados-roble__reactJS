import React from 'react';
import { createContext, useState, useContext } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
	//* Espacio para crear estados, variables, funciones, etc
	const [cart, setCart] = useState([]);
	const [size, setSize] = useState(0);
	console.log('const cart', cart);
	console.log(size);

	const idsInCartSize = cart.map((product) => product.size);
	const addProduct = (filteredProduct, counter) => {
		if (!counter || !size) {
			alert('Agregue cantidad de productos o talle');
		} else if (cart.length > 0) {
			const idsInCartID = cart.map((product) => product.id);
			console.log(idsInCartSize[0] === size);

			if (idsInCartID.includes(filteredProduct.id) && idsInCartSize[0] === size) {
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
			alert('Producto agregado al carrito primera vez');
			setSize(0);

			console.log(cart);
		}
	};
	console.log(idsInCartSize[0] === size);
	const removeProduct = (inCartID, size) => {
		console.log(inCartID, size);
		const cartUpdated = cart.filter(
			(product) => product.id !== inCartID || product.size !== size
		);
		console.log(cartUpdated);
		setCart(cartUpdated);
	};

	const cleanCart = () => {
		setCart([]);
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				setCart,
				addProduct,
				removeProduct,
				cleanCart,
				size,
				setSize,
			}}>
			{children}
		</CartContext.Provider>
	);
};
export default CartProvider;
