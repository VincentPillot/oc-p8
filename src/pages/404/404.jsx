import { Link } from 'react-router-dom'
import '/src/pages/404/404.css'

function Page404() {
    return(
        <div className="contenair__404">
            <h1 className="title__404">404</h1>
            <p className="error__message__404">Oups! La page que vous demandez n'existe pas.</p>
            <Link to={"/"} className="homepage__link__404">Retouner sur la page d'accueil</Link>
        </div>
    )
}

export default Page404