import React, { useState } from 'react';

const CartWidget = ({ suma }) => {
	const [quantity, setQuantity] = useState(0);

	return (
		<div className='cart-widget'>
			<i className='bi bi-cart4'></i>
			<span>{quantity}</span>
		</div>
	);
};

export default CartWidget;
