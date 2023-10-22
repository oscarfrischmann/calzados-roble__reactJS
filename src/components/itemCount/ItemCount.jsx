import React, { useState } from 'react';

const ItemCount = () => {

	const [counter, setCounter] = useState(0);

	const add = () => {
		setCounter(counter + 1);
	};
	const substract = () => {
		if (counter > 0) {
			setCounter(counter - 1);
		}
	};

	const onAdd = () => {
		alert(`${counter} producto/s agregado/s exitosamente al carrito!!`);
	};

	return (
		<div className='counter'>
			<span className='counter__quantity'>{counter}</span>
			<div>
				<button className='counter__button' onClick={substract}>
					-
				</button>
				<button className='counter__button' onClick={onAdd}>
					agregar al carrito
				</button>
				<button className='counter__button' onClick={add}>
					+
				</button>
			</div>
		</div>
	);
};

export default ItemCount;
