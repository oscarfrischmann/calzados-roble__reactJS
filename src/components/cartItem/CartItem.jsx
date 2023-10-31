import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import '../cartItem/cartItem.scss';

const CartItem = ({ ...product }) => {
	return (
		<div>
			<h1>{product.name}</h1>
			<h2>${product.totalPrice}</h2>
			<h3>cantidad: {product.quantity}</h3>
			<button>Quitar</button>
		</div>
	);
};

export default CartItem;
