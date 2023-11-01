import React, { useContext } from 'react';
import './cart.scss';
import Form from '../form/Form.jsx';
import { CartContext } from '../../context/CartContext';
import CartItem from '../cartItem/CartItem.jsx';

const Cart = () => {
	const { cart, cleanCart } = useContext(CartContext);
	console.log(cart);
	return (
		<>
			<h2 className='cart'>Carrito de compras</h2>
			{!cart.length ? (
				<h2>No hay productos en el carrito</h2>
			) : (
				<div className='cart-container'>
					{cart.map((product) => (
						<CartItem key={product.id} {...product} />
					))}
					<button onClick={() => cleanCart()}>Limpiar carrito</button>
				</div>
			)}
			<hr />
			<Form />
		</>
	);
};

export default Cart;
