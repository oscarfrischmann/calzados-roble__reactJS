import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import './itemDetail.scss';
import ItemCount from '../itemCount/ItemCount.jsx';

const ItemDetail = ({ products }) => {
	const { id } = useParams();
	const [sizes, setSizes] = [];
	// console.log('VER DETALLE product id x useParams:', id);
	// console.log('products x props', products);

	const filteredProduct = products.filter((product) => product.id == id);
	// console.log('filtered: ', filteredProduct);
	if (filteredProduct[0]) {
		for (let size in filteredProduct[0].sizes) {
			// console.log(size);
		}
	} else {
		// console.log('no hay "filteredProduct[0].sizes"');
	}
	return (
		<>
			{filteredProduct.map((p) => {
				return (
					<div key={p.id}>
						<div className='item-detail'>
							<img className='item-detail__img' src={p.image} alt='' />
							<div className='item-detail__info'>
								<h2 className='item-detail__title'>{p.title}</h2>
								<span className='item-detail__price'>$ {p.price}.-</span>
								<p className='item-detail__description'>{p.description}</p>
								<hr />
							</div>
							<div className='item-detail__buttons-container'>
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
