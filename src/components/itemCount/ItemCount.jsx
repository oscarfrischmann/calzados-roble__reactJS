import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext.jsx';

const ItemCount = ({ filteredProduct }) => {
	const { addProduct, cart, setCart } = useContext(CartContext);
	const [counter, setCounter] = useState(0);
	const productToCart = {
		id: filteredProduct[0].id,
		name: filteredProduct[0].title,
		price: filteredProduct[0].price,
		image: filteredProduct[0].image,
		quantity: counter,
		totalPrice: filteredProduct[0].price * counter,
	};

	const add = () => {
		setCounter(counter + 1);
	};
	const substract = () => {
		if (counter > 0) {
			setCounter(counter - 1);
		}
	};

	const onAdd = () => {
		addProduct(productToCart, counter);
	};

	return (
		<div className='counter'>
			<span className='counter__quantity'>{counter}</span>
			<div>
				<button className='counter__button' onClick={substract}>
					-
				</button>
				<button className='counter__button' onClick={onAdd}>
					agregar al carrito
				</button>
				<button className='counter__button' onClick={add}>
					+
				</button>
			</div>
		</div>
	);
};

export default ItemCount;
