import '/src/components/Banner/Banner.css'

function Banner(props) {
    return (
        <div className="banner" style={{ backgroundImage: `url("${props.image}")` }}>
            <div 
                className="banner__filter" 
                style={{ backgroundColor: props.filter ? "rgba(0,0,0,0.6)" : "transparent" }}
            >
                <h1>{props.title}</h1>
            </div>
        </div>
    );
}

export default Banner;