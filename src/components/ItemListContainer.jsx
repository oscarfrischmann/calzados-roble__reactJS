import React from 'react';

const ItemListContainer = ({ greeting }) => {
	return (
		<div className='greeting__container'>
			<img src='./src/assets/img/herencia.jpg' alt='Antiguas hormas de madera' />
			<h2>{greeting}</h2>
		</div>
	);
};

export default ItemListContainer;
