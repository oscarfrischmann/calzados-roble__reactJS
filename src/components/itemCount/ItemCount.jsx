import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext.jsx';
import './itemCount.scss';
import Sizes from '../sizes/Sizes.jsx';

const ItemCount = ({ filteredProduct }) => {
	const { addProduct, cart, setCart, size } = useContext(CartContext);
	const [counter, setCounter] = useState(0);
	const [sizesARR, setSizesArr] = useState([]);
	const productToCart = {
		id: filteredProduct[0].id,
		category: filteredProduct[0].category,
		name: filteredProduct[0].title,
		price: filteredProduct[0].price,
		image: filteredProduct[0].image,
		quantity: counter,
		totalPrice: filteredProduct[0].price * counter,
		size: size,
	};

	const add = () => {
		setCounter(counter + 1);
	};
	const substract = () => {
		if (counter > 0) {
			setCounter(counter - 1);
		}
	};
	function animation() {
		const btn = document.getElementById('btn');
		btn.classList.toggle('blue');
		btn.style.boxShadow = '1px 1px 10px black';
	}

	const sizes = { ...filteredProduct[0].sizes };

	return (
		<div className='counter'>
			<div>
				{filteredProduct[0].category !== 'billeteras' ? (
					<Sizes sizes={sizes} category={filteredProduct[0].category} />
				) : null}
			</div>
			<div>
				<button className='counter__button' onClick={substract}>
					-
				</button>
				<span className='counter__quantity'>{counter}</span>
				<button className='counter__button' onClick={add}>
					+
				</button>
				<button
					className='counter__button add'
					onClick={() => addProduct(productToCart, counter)}
					id='btn'
					onMouseEnter={animation}
					onMouseOut={animation}>
					comprar
				</button>
			</div>
		</div>
	);
};

export default ItemCount;
