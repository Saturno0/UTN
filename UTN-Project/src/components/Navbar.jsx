import React, {  useState  } from 'react';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    
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
                                <li className="links"><a href="#productos"><h3>Productos</h3></a></li>
                                <li className="links"><h3>Nuevo ingreso</h3></li>
                                <li className="links"><h3>Mas vendidos</h3></li>
                            </ul>
                        </div>

                        <div className="logo">
                            <a href="#"><img src="./assets/img/logo_creado_250x125_centrado.png" alt="Logo" id="logo" /></a>
                        </div>

                        <div className="right-menu">
                            <ul className="nav-links">
                                <li><h3>Buscar</h3></li>
                                <li><h3>Acceder</h3></li>
                                <li><h3>Iniciar sesión</h3></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;