import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../itemCount/ItemCount';

const Item = ({ id, category, description, image, price, title }) => {
	return (
		<article className='item'>
			<div className='item__img-container'>
				<img className='item__img' src={image} alt='' />
			</div>
			<h2 className='item__title'>{title}</h2>
			<div className='item__buttons'>
				<ItemCount />
				
			</div>
		</article>
	);
};

export default Item;
