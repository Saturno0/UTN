import React, {  useState  } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const totalItems = useSelector((state) => state.cart.totalItems);
    
    return(
        <header>
            <nav className="navbar">
                <div className="nav-container">
                    <div className="menu-icon" id="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                        ☰
                    </div>

                    <div className="header-inner flex-row container">
                        <div className="left-menu">
                            <ul className={`nav-links ${menuOpen ? 'open' : ''}`} id="lista">
                                <li className="links">
                                    <Link to={{
                                        pathname: "/",
                                        hash: "#products"
                                    }}>
                                        <h3>Productos</h3>
                                    </Link>
                                </li>
                                <li className="links"><h3>Nuevo ingreso</h3></li>
                                <li className="links"><h3>Mas vendidos</h3></li>
                            </ul>
                        </div>

                        <div className="logo">
                            <Link to="/">
                                <img src="./assets/img/logo_creado_250x125_centrado.png" alt="Logo" id="logo" />
                            </Link>
                        </div>

                        <div className="right-menu">
                            <ul className="nav-links">
                                <li><h3>Buscar</h3></li>
                                <li><h3>Acceder</h3></li>
                                <li>
                                    <Link to={{
                                        pathname: "/cart",
                                        hash: "#"
                                    }}>
                                        <h3>Carrito({totalItems})</h3>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;