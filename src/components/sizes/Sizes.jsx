import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext.jsx';
import './sizes.scss';

const Sizes = ({ sizes, category }) => {
	const { size, setSize } = useContext(CartContext);

	return (
		<div className='size'>
			<div className='size__btns-container'>
				{Object.keys(sizes).map((size, i) =>
					Object.values(sizes)[i] ? (
						<button
							onClick={() => setSize(size)}
							key={`${i}-size`}
							className='size__btn'>
							{size}
						</button>
					) : null
				)}
			</div>
		</div>
	);
};
export default Sizes;
