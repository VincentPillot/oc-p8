import '/src/styles/Navbar.css'

function Navbar() {
    return(
        <div className="navbar">
            <img className="navbar__logo" src="/src/assets/images/logo.png" alt="Kasa logo" />
            <div className="navbar__menu">
                <ul>
                    <li>
                        <a>Accueil</a>
                    </li>
                    <li>
                        <a>A Propos</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar