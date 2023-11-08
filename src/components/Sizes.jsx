import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext.jsx';

const Sizes = ({ sizes, category }) => {
	const { size, setSize } = useContext(CartContext);
	console.log(sizes);

	useEffect(() => {
		if (sizes[size] > 0) {
			const isSize = (sizes) => {
				console.log(size);
			};
		} else {
			alert(`Talle ${size} sin stock`);
		}
	}, [size]);

	if (category === 'hombre') {
		return (
			<div>
				<button onClick={() => setSize(39)}>39</button>
				<button onClick={() => setSize(40)}>40</button>
				<button onClick={() => setSize(41)}>41</button>
				<button onClick={() => setSize(42)}>42</button>
				<button onClick={() => setSize(43)}>43</button>
				<button onClick={() => setSize(44)}>44</button>
				<button onClick={() => setSize(45)}>45</button>
			</div>
		);
	} else {
		return (
			<div>
				<button onClick={() => setSize(35)}>35</button>
				<button onClick={() => setSize(36)}>36</button>
				<button onClick={() => setSize(37)}>37</button>
				<button onClick={() => setSize(38)}>38</button>
				<button onClick={() => setSize(39)}>39</button>
				<button onClick={() => setSize(40)}>40</button>
				<button onClick={() => setSize(41)}>41</button>
			</div>
		);
	}
};
export default Sizes;
