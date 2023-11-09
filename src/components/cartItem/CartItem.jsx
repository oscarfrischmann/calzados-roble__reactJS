import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import '../cartItem/cartItem.scss';

const CartItem = ({ ...product }) => {
	const { setCart, cart, removeProduct, size } = useContext(CartContext);
	console.log(cart);
	console.log(product.category);
	return (
		<div>
			<h1>{product.name}</h1>
			<h2>${product.totalPrice}</h2>
			<h3>cantidad: {product.quantity}</h3>
			{product.category !== 'billeteras' ? <h3>Talle: {product.size}</h3> : null}
			<button onClick={() => removeProduct(product.id, product.size)}>
				Quitar producto
			</button>
		</div>
	);
};

export default CartItem;
