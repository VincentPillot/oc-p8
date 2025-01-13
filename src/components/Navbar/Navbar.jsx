import '/src/components/Navbar/Navbar.css';
import { NavLink } from "react-router-dom"; // Utilisez NavLink à la place de Link

function Navbar() {
    return (
        <div className="navbar">
            <img className="navbar__logo" src="/src/assets/images/logo.png" alt="Kasa logo" />
            <div className="navbar__menu">
                <ul>
                    <li>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => 
                                isActive ? "navbar__link navbar__link__active" : "navbar__link"
                            }
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/a-propos" 
                            className={({ isActive }) => 
                                isActive ? "navbar__link navbar__link__active" : "navbar__link"
                            }
                        >
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
