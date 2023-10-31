import React, { useContext } from 'react';
import './cart.scss';
import Form from '../form/Form.jsx';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
	const cartContext = useContext(CartContext);
	console.log(cartContext.cart);
	return (
		<>
			<div className='cart'>CART</div>
			<Form />
		</>
	);
};

export default Cart;
