import React from 'react';
import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const Collection = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const db = getFirestore();
		const itemCollection = collection(db, 'miColeccion');
		getDocs(itemCollection).then((querySnapshot) => {
			const docs = querySnapshot.docs.map((doc) => doc.data());
			setProducts(docs);
		});
	}, []);
	return (
		<div>
			{products.map((p) => {
				<div>
					product: {p.nombre}
					precio: {p.precio}
				</div>;
			})}
		</div>
	);
};

export default Collection;
