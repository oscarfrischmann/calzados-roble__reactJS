import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext.jsx';

const CartWidget = () => {
	const cartContext = useContext(CartContext);
	const [quantity, setQuantity] = useState(0);
	console.log(quantity);
	useEffect(() => {
		setQuantity(cartContext.cart.length);
	}, [cartContext.cart]);

	return (
		<div className='cart-widget'>
			<i className='bi bi-cart4'></i>
			<span>{quantity}</span>
		</div>
	);
};

export default CartWidget;
