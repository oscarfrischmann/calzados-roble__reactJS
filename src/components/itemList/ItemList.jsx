import React from 'react';
import Item from '../item/Item';

const ItemList = ({products, productsByCategory}) => {
	console.log(products)
	return (
		<div className="list-product-container">
			{ products.map( product => <Item key={product.id} {...product}  />)} 
			
			{ productsByCategory.map( product => <Item key={product.id} {...product}  />)} 
		</div>
	);
};

export default ItemList;
