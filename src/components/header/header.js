import React from 'react';
import ReactDOM from 'react-dom';

import './header.css';



const Header = () => {
	return (
		<div className = "header d-flex">
	<div>
		<h3>
			<a href="#">Star DB</a>
		</h3>
	</div>
	<ul className = "d-flex">
		<li>
			<a href="#">People</a>
		</li>
		<li>
			<a href="#">Planets</a>
		</li>
		<li>
			<a href="#">Starships</a>
		</li>
	</ul>
	
</div>
	)
};

export default Header;