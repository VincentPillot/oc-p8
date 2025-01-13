import PropertiesGrid from '/src/components/Properties_Grid/Properties_Grid'
import Banner from '/src/components/Banner/Banner'

function Homepage() {
    return(
        <main>
            <Banner image="/src/assets/images/home_banner.png" title="Chez vous, partout et ailleurs" filter={true}/>
            <PropertiesGrid/>
        </main>
    )
}

export default Homepage