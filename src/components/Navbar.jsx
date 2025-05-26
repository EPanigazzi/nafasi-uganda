import { useState } from "react";
import logo from "../assets/logo.svg";
import "./Navbar.css";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<nav className="navbar">
			<div className="navbar-container">
				<a href="#hero" className="logo">
					<img
						src={logo}
						alt="NAFASI Uganda logo"
						className="logo-img"
					/>
					<span>Nafasi Uganda</span>
				</a>

				<ul className="navbar-menu">
					<li>
						<a href="#home">Home</a>
					</li>
					<li>
						<a href="#quienes-somos">¿Quiénes somos?</a>
					</li>
					<li>
						<a href="#que-hacemos">¿Qué hacemos?</a>
					</li>
					<li>
						<a href="#como-ayudar">Cómo ayudar</a>
					</li>
					<li>
						<a href="#contexto">Contexto</a>
					</li>
					<li>
						<a href="#contacto">Contacto</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;