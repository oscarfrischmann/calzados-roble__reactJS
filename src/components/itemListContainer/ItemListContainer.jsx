import React, { useEffect, useState } from 'react';
import ItemList from '../itemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
	let [products, setProducts] = useState([]);
	
	const { category } = useParams();
	console.log( 'clg de Category useParams ItemListContainer: ',category)

	console.log('producst: ',products)
	const productsByCategory = products.filter((p) => p.category === category);
	console.log('productsByCategory',productsByCategory)


	const getProducts = async () => {
		try {
			const fetchProducts = await fetch('https://fakestoreapi.com/products');
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
			<h2 className='greeting'>Fake Store</h2>
			
			{/* <ItemList productsByCategory={productsByCategory}/> */}
			<ItemList products={products} productsByCategory={productsByCategory} category={category}/>
		</div>
	);
};

export default ItemListContainer;
