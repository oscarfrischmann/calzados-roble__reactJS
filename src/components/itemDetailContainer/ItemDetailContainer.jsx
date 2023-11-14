import React, { useEffect, useState } from 'react';
import ItemDetail from '../itemDetail/ItemDetail.jsx';
import './itemDetailContainer.scss';
import { collection, getDocs, getFirestore, doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import Loader from '../loader/Loader.jsx';
const ItemDetailContainer = () => {
	let [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	// const { id } = useParams();
	// console.log('clg id', id);
	// useEffect(() => {
	// 	const db = getFirestore();
	// 	const oneItem = doc(db, 'roble', `${id}`);

	// 	getDoc(oneItem).then((snapshot) => {
	// 		if (snapshot.exists()) {
	// 			const docs = snapshot.data();
	// 			const ids = snapshot.id;
	// 			setProducts(docs);
	// 			console.log(ids);
	// 		}
	// 	});
	// }, []);
	useEffect(() => {
		const db = getFirestore();
		const itemCollection = collection(db, 'roble');
		getDocs(itemCollection).then((querySnapshot) => {
			const docs = querySnapshot.docs.map((doc) => doc.data());
			// querySnapshot.docs.forEach((first) => {
			// 	console.log(first.id);
			// });
			setProducts(docs);
			setIsLoading(false);
		});
	}, []);
	return isLoading ? <Loader /> : <ItemDetail products={products} />;
};

export default ItemDetailContainer;
