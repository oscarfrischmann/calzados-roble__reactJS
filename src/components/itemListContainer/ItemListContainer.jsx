import React, { useEffect, useState } from 'react';
import ItemList from '../itemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const ItemListContainer = () => {
	let [products, setProducts] = useState([]);

	const { category } = useParams();
	console.log('clg de Category useParams ItemListContainer: ', category);

	console.log('producst: ', products);
	const productsByCategory = products.filter((p) => p.category === category);
	console.log('productsByCategory', productsByCategory);

	useEffect(() => {
		const db = getFirestore();
		const itemCollection = collection(db, 'roble');
		getDocs(itemCollection).then((querySnapshot) => {
			const docs = querySnapshot.docs.map((doc) => doc.data());
			setProducts(docs);
		});
	}, []);

	return (
		<div className='greeting__container'>
			<h2 className='greeting'>Calzados Roble</h2>
			<ItemList
				products={products}
				productsByCategory={productsByCategory}
				category={category}
			/>
		</div>
	);
};

export default ItemListContainer;
