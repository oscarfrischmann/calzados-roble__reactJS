import React, { useEffect, useState } from 'react';
import ItemDetail from '../itemDetail/ItemDetail.jsx';
import './itemDetailContainer.scss';

const ItemDetailContainer = () => {
	let [products, setProducts] = useState([]);

	const getProducts = async () => {
		try {
			const fechedProducts = await fetch('https://fakestoreapi.com/products');
			products = await fechedProducts.json();
			console.log(products);
			return products;
		} catch (e) {
			console.log('Error: ', e);
		}
	};

	useEffect(() => {
		getProducts()
			.then((products) => setProducts(products))
			.catch((e) => console.log(e));
	}, []);

	return <ItemDetail products={products} />;
};

export default ItemDetailContainer;
