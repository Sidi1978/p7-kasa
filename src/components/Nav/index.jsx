import React from 'react'
//import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";
import "../../style/main.scss";

export default function Nav() {
  return (
	<nav className={classes.nav } >
	<NavLink className={({ isActive }) =>
		isActive ? classes.active : undefined 
	  }
	  end
	  to="/"
	>
	  Accueil
	</NavLink>
	<NavLink
	  className={({ isActive }) =>
		isActive ? classes.active : undefined
	  }
	  end
	  to="/about"
	>
	  A propos
	</NavLink>
  </nav>
	);
}
