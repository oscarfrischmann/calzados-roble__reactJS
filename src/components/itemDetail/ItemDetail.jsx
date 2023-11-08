import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import './itemDetail.scss';
import ItemCount from '../itemCount/ItemCount.jsx';

const ItemDetail = ({ products }) => {
	const { id } = useParams();
	const [sizes, setSizes] = [];
	console.log(id);
	console.log(products);

	const filteredProduct = products.filter((product) => product.id == id);
	console.log('filtered: ', filteredProduct);
	if (filteredProduct[0]) {
		for (let size in filteredProduct[0].sizes) {
			console.log(size);
		}
	} else {
		console.log('no hay "filteredProduct[0].sizes"');
	}
	return (
		<>
			{filteredProduct.map((p) => {
				if (p.sizes) {
					console.log(p.sizes[39]);
					console.log(p.sizes[40]);
					console.log(p.sizes[41]);
					console.log(p.sizes[42]);
					console.log(p.sizes[43]);
					console.log(p.sizes[44]);
					console.log(p.sizes[45]);
					p.sizes[39] ? console.log('Hay') : console.log('no hay');
					p.sizes[41] ? console.log('Hay') : console.log('no hay');
				} else {
					console.log('No hay sizes');
				}
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
