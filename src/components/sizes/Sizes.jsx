import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext.jsx';
import './sizes.scss';

const Sizes = ({ sizes, category }) => {
	const { size, setSize, sizeBtn, cart } = useContext(CartContext);

	const onSelect = (size, i) => {
		const sizeBtn = document.querySelectorAll('.size__btn');
		setSize(size);
		sizeBtn.forEach((s) => {
			s.style.border = 'none';
		});
		sizeBtn[i].style.border = '1px solid black';
	};

	useEffect(() => {
		const sizeBtn = document.querySelectorAll('.size__btn');
		sizeBtn.forEach((s) => {
			s.style.border = 'none';
		});
	}, [cart]);
	return (
		<div className='size'>
			<div className='size__btns-container'>
				{Object.keys(sizes).map((size, i) =>
					Object.values(sizes)[i] ? (
						<button
							onClick={() => onSelect(size, i)}
							key={`${i}-size`}
							className='size__btn'>
							{size}
						</button>
					) : (
						<button key={`${i}-size`} className='size__btn disabled' disabled>
							{size}
						</button>
					)
				)}
			</div>
		</div>
	);
};
export default Sizes;
