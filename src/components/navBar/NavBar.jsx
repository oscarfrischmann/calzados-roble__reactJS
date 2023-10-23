import React from 'react';
import CartWidget from '../cartWidget/CartWidget';
import mainLogo from '../../assets/img/logo-roble-g.png';
import { Link, useParams } from 'react-router-dom';

const NavBar = () => {

	return (
		<nav className='nav'>
			<Link to={'/'}>
				<img src={mainLogo} className='nav__logo' alt='' />
			</Link>
			<ul className='nav__ul'>
				<Link to={`/category/men's clothing`}>
					<li className='nav__ul-item'>men's clothing</li>
				</Link>

				<Link to={`/category/jewelery`}>
					<li className='nav__ul-item'>jewelery</li>
				</Link>

				<Link to={`/category/electronics`}>
					<li className='nav__ul-item'>electronics</li>
				</Link>

				<Link to={`/category/women's clothing`}>
					<li className='nav__ul-item'>women's clothing</li>
				</Link>
			</ul>
			<Link to='/cart'>
				<CartWidget />
			</Link>
		</nav>
	);
};

export default NavBar;
