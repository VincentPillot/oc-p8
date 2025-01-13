import { useState } from 'react'
import '/src/styles/components/Collapse.css'

function Collapse(props) {
    const [visible, setVisible] = useState(true)
    const title = props.title 
    const content = props.content 

    return(
        <div className={`collapse ${visible ? "" : "collapse__show"}`}>
            <div className="collapse__header" onClick={() => {setVisible(!visible)}}>
                <h3>{title}</h3>
                <img src="/src/assets/images/arrow.png" alt="Arrow collapse" className="collapse__arrow" />
            </div>
            <div className={`collapse__content__contenair ${visible ? "" : "collapse__content__show"}`}>
                { typeof(content) === "object" ? ( // On vérifie si on as reçu un tableau ou juste une string
                        content.map((contentText, index) => ( //Si tableau on boucle pour afficher tout les éléments
                        <p key={index}>{contentText}</p>  
                        ))
                    ) : (
                        <p>{content}</p> //Sinon on affiche que la string
                    )
                }
                <p></p>
            </div>
        </div>
    )
}

export default Collapse