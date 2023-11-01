import React from 'react';
import { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const DocumentItemDetail = () => {
	const { id } = useParams();
	const [product, setProduct] = useState([]);

	useEffect(() => {
		const db = getFirestore();
		const oneItem = doc(db, 'micolecion', `${id}`);

		getDoc(oneItem).then((snapshot) => {
			if (snapshot.exists()) {
				const docs = snapshot.data();
				setProduct(docs);
			}
		});
	}, []);

	return (
		<div>
			<h1>{product.nombre}</h1>
			<h2>{product.precio}</h2>
		</div>
	);
};

export default DocumentItemDetail;
