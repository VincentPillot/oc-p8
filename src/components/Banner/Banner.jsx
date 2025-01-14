import '/src/components/Banner/Banner.css'

function Banner(props) {
    return (
        <div className="banner" style={{ backgroundImage: `url("${props.image}")` }}>
            <div 
                className="banner__filter" 
                style={{ backgroundColor: props.filter ? "rgba(0,0,0,0.6)" : "transparent" }} //Change le background filter si props.filter es true ou false
            >
                {props.title && <h1>{props.title}</h1>} {/* Condition pour afficher <h1> seulement si props.title est non vide */}
            </div>
        </div>
    );
}

export default Banner;
