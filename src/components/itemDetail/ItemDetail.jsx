import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import './itemDetail.scss';
import ItemCount from '../itemCount/ItemCount.jsx';
import { CartContext } from '../../context/CartContext.jsx';

const ItemDetail = ({ products }) => {
	const cartContext = useContext(CartContext);

	const { id } = useParams();
	// console.log(id);
	// console.log(products);

	const filteredProduct = products.filter((product) => product.id == id);
	console.log('filtered: ', filteredProduct);

	return (
		<>
			{filteredProduct.map((p) => {
				return (
					<div key={p.id}>
						<div className='item__card detail'>
							<div className='item__img-container'>
								<img className='item__img' src={p.image} alt='' />
							</div>
							<h2 className='item__title'>{p.title}</h2>
							<div className='item__buttons'>
								<ItemCount filteredProduct={filteredProduct} />
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default ItemDetail;
