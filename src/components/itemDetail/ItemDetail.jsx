import React from 'react';
import { useParams } from 'react-router-dom';
import './itemDetail.scss';
import ItemCount from '../itemCount/ItemCount';

const ItemDetail = ({ products }) => {
	const { id } = useParams();
	console.log(id);
	console.log(products);

	const filteredProduct = products.filter((product) => product.id == id);
	console.log('filtered: ', filteredProduct);

	return (
		<>
			{filteredProduct.map((p) => {
				return (
					<div>
						<div className='item__card'>
							<div className='item__img-container'>
								<img className='item__img' src={p.image} alt='' />
							</div>
							<h2 className='item__title'>{p.title}</h2>
							<div className='item__buttons'>
								<ItemCount />
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default ItemDetail;
