import React from 'react';
import '@styles/Header.scss';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo.svg';

const Header = () => {
	return (
		<nav>
			<img src={menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/client-save">Save</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email">alex.guaman86@gmail.com</li>
				</ul>
			</div>
		</nav>
	);
}

export default Header;
