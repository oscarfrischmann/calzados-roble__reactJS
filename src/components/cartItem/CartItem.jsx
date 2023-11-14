import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import '../cartItem/cartItem.scss';

const CartItem = ({ ...product }) => {
	const { setCart, cart, removeProduct, size } = useContext(CartContext);
	// console.log(cart);
	// console.log(product.category);
	return (
		<>
			<div className='cart__item'>
				{<img src={product.image} className='cart__img'></img>}
				<h2>{product.name}</h2>
				<h3>${product.totalPrice}</h3>
				<h4>cantidad: {product.quantity}</h4>
				{product.category !== 'billeteras' ? (
					<h3>Talle: {product.size}</h3>
				) : (
					<h3>S/T</h3>
				)}
				<button onClick={() => removeProduct(product.id, product.size)}>
					Quitar producto
				</button>
			</div>
			<hr />
		</>
	);
};

export default CartItem;
