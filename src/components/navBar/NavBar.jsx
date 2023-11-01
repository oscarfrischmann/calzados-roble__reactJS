import React, { useContext } from 'react';
import CartWidget from '../cartWidget/CartWidget';
import mainLogo from '../../assets/img/logo-roble-g.png';
import { Link, useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const NavBar = () => {
	const { cart } = useContext(CartContext);
	return (
		<nav className='nav'>
			<Link to={'/'}>
				<img src={mainLogo} className='nav__logo' alt='' />
			</Link>
			<ul className='nav__ul'>
				<Link to={`/category/hombre`}>
					<li className='nav__ul-item'>Hombre</li>
				</Link>

				<Link to={`/category/billeteras`}>
					<li className='nav__ul-item'>Billeteras</li>
				</Link>

				<Link to={`/category/mujer`}>
					<li className='nav__ul-item'>Mujer</li>
				</Link>
			</ul>
			{!cart.length ? null : (
				<Link to='/cart'>
					<CartWidget />
				</Link>
			)}
		</nav>
	);
};

export default NavBar;
