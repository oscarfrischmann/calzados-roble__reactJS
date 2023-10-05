import React from 'react';
import imgHerencia from '../assets/img/herencia.jpg'

const ItemListContainer = ({ greeting }) => {
	return (
		<div className='greeting__container'>
			<img src={imgHerencia} alt='Antiguas hormas de madera' />
			<h2>{greeting}</h2>
		</div>
	);
};

export default ItemListContainer;
