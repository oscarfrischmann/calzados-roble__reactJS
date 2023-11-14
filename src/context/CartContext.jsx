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
				alert('cart !0');
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
					// for (let i = 0; i < matchingProducts.length; i++) {
					// 	console.log('vuelta', i);
					// 	if (matchingProducts[i].size === filteredProduct.size) {
					// 		console.log('size MATCHED');
					// 		const newQuantity = (matchingProducts[i].quantity +=
					// 			filteredProduct.quantity);

					// 		filteredProduct.quantity = newQuantity;
					// 		filteredProduct.totalPrice = newQuantity * filteredProduct.price;
					// 		const matchingProductIndex = cart.indexOf(matchingProducts[i]);
					// 		console.log('matchingprod INDEX', matchingProductIndex);
					// 		cart.splice(matchingProductIndex, 1);
					// 		console.log('cart after splice', cart);

					// 		setCart((prevCart) => [...prevCart, filteredProduct]);
					// 		setSize(0);
					// 		console.log('Producto actualizado');
					// 	} else if (matchingProducts[i].size !== filteredProduct.size) {
					// 		console.log('newSIZE');
					// 		setCart((prevCart) => [...prevCart, filteredProduct]);
					// 		console.log(`${filteredProduct.name} number ${size} added READED`);
					// 		setSize(0);
					// 	}
					// }
				} else {
					setCart((prevCart) => [...prevCart, filteredProduct]);
					alert(`Producto agregado`);
					setSize(0);
				}
			}
		}
	};

	// 	} else if (cart.length > 0) {
	// 		const idsInCartID = cart.map((product) => product.id);
	// 		console.log(idsInCartSize[0] === size);
	// 		console.log(idsInCartSize);
	// 		console.log(idsInCartID);

	// 		if (idsInCartID.includes(filteredProduct.id) && idsInCartSize[0] === size) {
	// 			const matchingProduct = cart.find(
	// 				(inCart) => inCart.id === filteredProduct.id
	// 			);
	// 			const newQuantity = (matchingProduct.quantity += filteredProduct.quantity);

	// 			filteredProduct.quantity = newQuantity;
	// 			filteredProduct.totalPrice = newQuantity * filteredProduct.price;
	// 			const matchingProductIndex = cart.indexOf(matchingProduct);
	// 			cart.splice(matchingProductIndex, 1);

	// 			setCart((prevCart) => [...prevCart, filteredProduct]);
	// 			setSize(0);
	// 			alert('Producto actualizado');
	// 		} else {
	// 			setCart((prevCart) => [...prevCart, filteredProduct]);
	// 			setSize(0);

	// 			alert('Producto agregado al carrito');
	// 		}
	// 	} else {
	// 		setCart((prevCart) => [...prevCart, filteredProduct]);
	// 		alert('Producto agregado al carrito primera vez');
	// 		setSize(0);

	// 		console.log(cart);
	// 	}
	// };

	//!--------------------------------------
	// const addProduct = (filteredProduct, counter) => {
	// 	if (!size && filteredProduct.category !== 'billeteras') {
	// 		alert('Agregue talle');
	// 	} else if (cart.length > 0) {
	// 		const idsInCartID = cart.map((product) => product.id);
	// 		console.log(idsInCartSize[0] === size);
	// 		console.log(idsInCartSize);
	// 		console.log(idsInCartID);

	// 		if (idsInCartID.includes(filteredProduct.id) && idsInCartSize[0] === size) {
	// 			const matchingProduct = cart.find(
	// 				(inCart) => inCart.id === filteredProduct.id
	// 			);
	// 			const newQuantity = (matchingProduct.quantity += filteredProduct.quantity);

	// 			filteredProduct.quantity = newQuantity;
	// 			filteredProduct.totalPrice = newQuantity * filteredProduct.price;
	// 			const matchingProductIndex = cart.indexOf(matchingProduct);
	// 			cart.splice(matchingProductIndex, 1);

	// 			setCart((prevCart) => [...prevCart, filteredProduct]);
	// 			setSize(0);
	// 			alert('Producto actualizado');
	// 		} else {
	// 			setCart((prevCart) => [...prevCart, filteredProduct]);
	// 			setSize(0);

	// 			alert('Producto agregado al carrito');
	// 		}
	// 	} else {
	// 		setCart((prevCart) => [...prevCart, filteredProduct]);
	// 		alert('Producto agregado al carrito primera vez');
	// 		setSize(0);

	// 		console.log(cart);
	// 	}
	// };
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
