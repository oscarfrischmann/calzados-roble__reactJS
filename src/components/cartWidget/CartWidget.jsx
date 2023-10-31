import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext.jsx';

const CartWidget = () => {
	const cartContext = useContext(CartContext);
	const [quantity, setQuantity] = useState(0);

	useEffect(() => {
		setQuantity(cartContext.cart.length);
	}, [cartContext.cart, quantity, cartContext, CartWidget]);

	return (
		<div className='cart-widget'>
			<i className='bi bi-cart4'></i>
			<span>{quantity}</span>
		</div>
	);
};

export default CartWidget;
