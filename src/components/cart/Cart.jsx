import React, { useContext } from 'react';
import './cart.scss';
import { CartContext } from '../../context/CartContext';
import CartItem from '../cartItem/CartItem.jsx';
import { Link } from 'react-router-dom';

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
						<CartItem key={product.id + product.size} {...product} />
					))}
					<button
						onClick={() => cleanCart()}
						className='cart__remove-item-btn cart__clean'>
						Limpiar carrito
					</button>
				</div>
			)}

			{cart.length ? (
				<Link to={'/form'} className='link'>
					<button className='form__btn'>Finalizar compra</button>
				</Link>
			) : null}
		</>
	);
};

export default Cart;
