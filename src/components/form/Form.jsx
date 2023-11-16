import React, { useState, useContext } from 'react';
import { addDoc, getFirestore, collection } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext.jsx';
import { Link } from 'react-router-dom';

import './form.scss';

const Form = () => {
	const [nombre, setNombre] = useState('');
	const [email, setEmail] = useState('');
	const [orderId, setOrderId] = useState('');

	const { cart, setCart } = useContext(CartContext);

	const db = getFirestore();

	const submitForm = async (e) => {
		e.preventDefault();
		try {
			await addDoc(ordersCollection, order)
				.then(({ id }) => setOrderId(id))
				.then(setCart([]));
		} catch {
			(e) => console.log(e);
		}
	};

	const order = {
		nombre: nombre,
		email: email,
		items: cart,
	};

	const ordersCollection = collection(db, 'MiOrden');

	return (
		<div>
			{!orderId && (
				<form onSubmit={submitForm} className='form'>
					<div className='form__name'>
						<label htmlFor='name'>Nombre</label>
						<input
							type='text'
							name='name'
							onChange={(e) => setNombre(e.target.value)}
							required></input>
					</div>
					<div className='form__email'>
						<label htmlFor='email'>E-mail</label>
						<input
							type='email'
							name='email'
							onChange={(e) => setEmail(e.target.value)}
							required></input>
					</div>

					<button type='submit' className='form__btn'>
						Comprar
					</button>
				</form>
			)}

			{orderId && (
				<div className='gracias'>
					<span>Gracias por tu compra, {nombre}!</span>
					<span>
						{' '}
						Nro de pedido: <em>{orderId}</em>
					</span>
					<Link to={'/'}>
						<button className='form__btn'>Cerrar</button>
					</Link>
				</div>
			)}
		</div>
	);
};

export default Form;
