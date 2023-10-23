import React from 'react';
import CartWidget from '../cartWidget/CartWidget';
import mainLogo from '../../assets/img/logo-roble-g.png';
import { Link } from 'react-router-dom';

const NavBar = ({}) => {
	return (
		<nav className='nav'>
			<Link to={'/'}>
				<img src={mainLogo} className='nav__logo' alt='' />
			</Link>
			<ul className='nav__ul'>
				<li className='nav__ul-item'>mujer</li>
				<li className='nav__ul-item'>hombre</li>
				<li className='nav__ul-item'>niño</li>
				<li className='nav__ul-item'>accesorios</li>
				<li className='nav__ul-item'>nosotros</li>
				<li className='nav__ul-item'>contacto</li>
			</ul>
			<Link to='/cart'>
				<CartWidget />
			</Link>
		</nav>
	);
};

export default NavBar;
