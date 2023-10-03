import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
	return (
		<nav className='nav'>
			<img src='./src/assets/img/logo-roble-g.png' className='nav__logo' alt='' />
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
			<CartWidget/>
		</nav>
	);
};

export default NavBar;
