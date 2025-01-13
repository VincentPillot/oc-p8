import '/src/components/Navbar/Navbar.css'
import { Link } from "react-router";

function Navbar() {
    return(
        <div className="navbar">
            <img className="navbar__logo" src="/src/assets/images/logo.png" alt="Kasa logo" />
            <div className="navbar__menu">
                <ul>
                    <li>
                        <Link to={"/"}>Accueil</Link>
                    </li>
                    <li>
                        <Link to={"/a-propos"}>A Propos</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar