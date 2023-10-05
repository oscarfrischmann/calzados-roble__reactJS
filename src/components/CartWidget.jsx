import React from 'react';

const CartWidget = ({ suma }) => {
	return (
		<div className='cart-widget'>
			<i class='bi bi-cart4'></i>
			<span>{suma + suma}</span>
		</div>
	);
};

export default CartWidget;
