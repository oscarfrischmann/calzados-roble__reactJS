import React, { useContext } from 'react';
import './cart.scss';
import Form from '../form/Form.jsx';
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
				<Link to={'/Form'} className='link'>
					<button className='button type--A'>
						<div className='button__line'></div>
						<div className='button__line'></div>
						<span className='button__text'>Finalizar compra</span>
						<div className='button__drow1'></div>
						<div className='button__drow2'></div>
					</button>
				</Link>
			) : null}
		</>
	);
};

export default Cart;
