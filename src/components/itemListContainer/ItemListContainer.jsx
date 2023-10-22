import React, { useEffect, useState } from 'react';
import ItemList from '../itemList/ItemList';


const ItemListContainer = () => {
	let [products, setProducts] = useState([]);

	const getProducts = async () => {
		try {
			const fetchProducts = await fetch(
				'https://fakestoreapi.com/products'
			);
			products = await fetchProducts.json();
			return products;
		} catch (e) {
			console.log('el error es:', e);
		}
	};
	useEffect(() => {
		getProducts()
			.then((products) => setProducts(products))
			.catch((e) => console.log('erorrrr', e));
	}, []); 

	return (
		<div className='greeting__container'>
			<h2 className='greeting'>Calzados Roble</h2>
			<ItemList products={products} />
		</div>
	);
};

export default ItemListContainer;
