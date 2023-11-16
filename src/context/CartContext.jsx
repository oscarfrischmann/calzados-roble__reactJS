import React from 'react';
import { createContext, useState, useContext } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
	//* Espacio para crear estados, variables, funciones, etc
	const [cart, setCart] = useState([]);
	const [size, setSize] = useState(0);
	// console.log('const cart', cart);
	// console.log(size);

	const addProduct = (filteredProduct, counter) => {
		if (filteredProduct.category === 'billeteras') {
			if (cart.length === 0) {
				setCart((prevCart) => [...prevCart, filteredProduct]);
				alert('Producto agregado ');
				setSize(0);
			} else {
				const idsInCartID = cart.map((product) => product.id);
				console.log('isdincartID', idsInCartID);
				if (idsInCartID.includes(filteredProduct.id)) {
					const matchingProduct = cart.find(
						(inCart) => inCart.id === filteredProduct.id
					);
					console.log('matchingproduct', matchingProduct);
					const newQuantity = (matchingProduct.quantity += filteredProduct.quantity);

					filteredProduct.quantity = newQuantity;
					filteredProduct.totalPrice = newQuantity * filteredProduct.price;
					const matchingProductIndex = cart.indexOf(matchingProduct);
					console.log('marichingprod INDEX', matchingProductIndex);
					cart.splice(matchingProductIndex, 1);
					console.log('cart after splice', cart);

					setCart((prevCart) => [...prevCart, filteredProduct]);
					setSize(0);
					alert('Producto actualizado');
				} else {
					setCart((prevCart) => [...prevCart, filteredProduct]);
					alert('Producto agregado');
					setSize(0);
				}
			}
		} else {
			if (!size) {
				alert('Elige un talle');
			} else if (size) {
				const idsInCartID = cart.map((product) => product.id);
				console.log('else if(size)', idsInCartID);
				if (idsInCartID.includes(filteredProduct.id)) {
					console.log('ID in cart');
					const matchingProducts = cart.filter(
						(inCart) =>
							inCart.id === filteredProduct.id &&
							inCart.size === filteredProduct.size
					);

					console.log('matchingproductSSS', matchingProducts);
					if (matchingProducts.length === 0) {
						setCart((prevCart) => [...prevCart, filteredProduct]);
						alert(`Producto agregado`);
						setSize(0);
					} else {
						console.log('size MATCHED');
						const newQuantity = (matchingProducts[0].quantity +=
							filteredProduct.quantity);

						filteredProduct.quantity = newQuantity;
						filteredProduct.totalPrice = newQuantity * filteredProduct.price;
						console.log(filteredProduct);

						const matchingProductIndex = cart.indexOf(matchingProducts[0]);
						console.log('matchingprod INDEX', matchingProductIndex);
						cart.splice(matchingProductIndex, 1);
						console.log('cart after splice', cart);

						setCart((prevCart) => [...prevCart, filteredProduct]);
						setSize(0);
						alert('Producto actualizado');
					}
				} else {
					setCart((prevCart) => [...prevCart, filteredProduct]);
					alert(`Producto agregado`);
					setSize(0);
				}
			}
		}
	};
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
