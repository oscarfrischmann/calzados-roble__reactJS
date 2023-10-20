import React from 'react';
import CartWidget from '../cartWidget/CartWidget';
import mainLogo from '../../assets/img/logo-roble-g.png';
import { Link } from 'react-router-dom';

const NavBar = ({}) => {
	const suma = 65695;

	return (
		<nav className='nav'>
			<Link to={"/"}>
				<img src={mainLogo} className='nav__logo' alt='' />
			</Link>
			<ul className='nav__ul'>
				<li className='nav__ul-item'>
					<a href=''>mujer</a>
				</li>
				<li className='nav__ul-item'>
					<a href=''>hombre</a>
				</li>
				<li className='nav__ul-item'>
					<a href=''>niño</a>
				</li>
				<li className='nav__ul-item'>
					<a href=''>accesorios</a>
				</li>
				<li className='nav__ul-item'>
					<a href=''>nosotros</a>
				</li>
				<li className='nav__ul-item'>
					<a href=''>contacto</a>
				</li>
			</ul>
			<CartWidget suma={suma} />
		</nav>
	);
};

export default NavBar;
