import React, { useEffect, useState } from 'react';
import ItemDetail from '../itemDetail/ItemDetail.jsx';
import './itemDetailContainer.scss';
import { collection, getDocs, getFirestore, doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
const ItemDetailContainer = () => {
	let [products, setProducts] = useState([]);
	// const { id } = useParams();

	// useEffect(() => {
	// 	const db = getFirestore();
	// 	const oneItem = doc(db, 'roble', `${id}`);

	// 	getDoc(oneItem).then((snapshot) => {
	// 		if (snapshot.exists()) {
	// 			const docs = snapshot.data();
	// 			setProducts(docs);
	// 		}
	// 	});
	// }, []);
	useEffect(() => {
		const db = getFirestore();
		const itemCollection = collection(db, 'roble');
		getDocs(itemCollection).then((querySnapshot) => {
			const docs = querySnapshot.docs.map((doc) => doc.data());
			setProducts(docs);
		});
	}, []);
	return <ItemDetail products={products} />;
};

export default ItemDetailContainer;
