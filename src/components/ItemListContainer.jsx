import React from 'react';

const ItemListContainer = ({ greeting }) => {
	return (
		<div className='greeting__container'>
			<img src='../assets/img/herencia.jpg' alt='' />
			<h2>{greeting}</h2>
		</div>
	);
};

export default ItemListContainer;
