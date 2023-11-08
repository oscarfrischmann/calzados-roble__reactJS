import React, { useState, useContext } from 'react';
import { addDoc, getFirestore, collection } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext';

const Form = () => {
	const [nombre, setNombre] = useState('');
	const [email, setEmail] = useState('');
	const [orderId, setOrderId] = useState('');

	const { cart, setCart } = useContext(CartContext);

	const db = getFirestore();

	const submitForm = (e) => {
		e.preventDefault();
		addDoc(ordersCollection, order)
			.then(({ id }) => setOrderId(id))
			.finally(setCart([]));

		console.log(nombre);
		console.log(email);
	};
	const order = {
		nombre: nombre,
		email: email,
		items: cart,
	};

	const ordersCollection = collection(db, 'MiOrden');

	const onInput = (e) => {};

	return (
		<div>
			<form onSubmit={submitForm}>
				<input
					type='text'
					name='myName'
					onChange={(e) => setNombre(e.target.value)}></input>
				<input
					type='email'
					name='myEmail'
					onChange={(e) => setEmail(e.target.value)}></input>

				<button type='submit'>Submit</button>
			</form>
			<p>Nro de order: {orderId}</p>
		</div>
	);
};

export default Form;