import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
const CompanenteA = () => {
	const { cart, setCart, comision } = useContext(CartContext);
	const myArr = [1, 2, 3];
	return <div>variable comision {comision}</div>;
};

export default CompanenteA;
