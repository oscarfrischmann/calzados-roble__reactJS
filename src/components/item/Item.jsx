import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, category, description, image, price, title }) => {
	const [itemQuantity, setItemQuantity] = useState(0);
	return (
		<article className='item'>
			<div className='item__img-container'>
				<img className='item__img' src={image} alt='' />
			</div>
			<h2 className='item__title'>{title}</h2>
			<div className='item__buttons'>
				<button onClick={() => setItemQuantity(itemQuantity++)}>
					Agregar al Carrito
				</button>
				<Link to={'/'}>
					<button>Volver </button>
				</Link>
			</div>
		</article>
	);
};

export default Item;
