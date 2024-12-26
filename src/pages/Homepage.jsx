import LogementsSection from '/src/components/Logements_Grid'
import '/src/styles/Homepage.css'

function Homepage() {
    return(
        <main>
            <div className="home__banner">
                <div className="home__banner__filter">
                    <h1>Chez vous, partout et ailleurs</h1>
                </div>
            </div>

            <LogementsSection/>
        </main>
    )
}

export default Homepage