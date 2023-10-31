import React, { useContext } from 'react';
import './cart.scss';
import Form from '../form/Form.jsx';
import { CartContext } from '../../context/CartContext';
import CartItem from '../cartItem/CartItem.jsx';

const Cart = () => {
	const { cart } = useContext(CartContext);
	console.log(cart);
	return (
		<>
			<div className='cart'>CART</div>
			<div className='cart-container'>
				{cart.map((product) => (
					<CartItem key={product.id} {...product} />
				))}
			</div>
			<Form />
		</>
	);
};

export default Cart;
