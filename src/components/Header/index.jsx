import React from 'react'
import logo from '../../assets/images/LOGO.svg'
import Nav from '../Nav'
import "../../style/main.scss";

export default function Header() {
  return (
		<header className="headerBlock">
			<figure className='headerBlock__fig'>
				<img className="logo" src={logo} alt="logo de l'agence kasa" />
			</figure>
			<Nav className="nav-header" />
		</header>
	)
}
