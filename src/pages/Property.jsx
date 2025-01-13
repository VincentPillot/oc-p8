import { useState, useEffect } from 'react';
import { getProperty } from '../scripts/api';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Collapse from '../components/Collapse';
import '/src/styles/Property.css'
import PropertySlider from '../components/Property_Slider/Property_Slider';

function Property() {
    const [propertyData, setPropertyData] = useState(null); // État pour stocker les données
    const [searchParams] = useSearchParams(); //Hook pour récupérer les paramétres d'URL
    const navigate = useNavigate();
    const propertyId = searchParams.get("id");

    useEffect(() => {
        const fetchPropertyData = async () => {
            try {
                const result = await getProperty(propertyId);
                if (result.success) {
                    setPropertyData(result.data); // Met à jour les données
                } else {
                    navigate('/404') //Redirection vers la page 404 si l'api ne trouve pas de logement correspondant à l'id passer en parametre d'URL
                }
            } catch {
                // Si une erreur se produit, on laisse propertyData comme `null`
                console.error('Erreur lors de la récupération des données, veuillez réessayer ultérieurement');
            }
        };

        fetchPropertyData(); 
    }, [propertyId]); // Ajout de `propertyId` comme dépendance

    // Si `propertyData` est toujours null, un message de chargement es affiché (en cas de connexion lente)
    if (!propertyData) {
        return <p>Chargement des données...</p>;
    }
    return (
        <div>
            <PropertySlider pictures={propertyData.pictures}/> {/* Slider d'images */}

            <div className="property__infos__row__1">
                <div className="property__title__location">
                    <h1 className="property__title">{propertyData.title}</h1>
                    <p className="property__location">{propertyData.location}</p>
                </div>
                <div className="property__host">
                    <p className="property__host__name">{propertyData.host.name}</p>
                    <img className="property__host__picture" src={propertyData.host.picture} alt="Hôte" />
                </div>
            </div> 
            <div className="property__infos__row__2">
                <div className="property__rating">
                {Array.from({ length: 5 }).map((_, index) => ( // On créer un tableau de taille 5 (nombre d'étoiles de notation)
                    <img //On boucle pour créer une étoile à chaque itérations
                        key={index}
                        className={"property__rating__star"}
                        src={
                            index < (parseInt(propertyData.rating) || 0) ? './src/assets/images/star_active.png' : './src/assets/images/star_inactive.png' //On compare si l'index de la boucle es < à la note pour choisir une src différente pour la couleur des étoiles selon la note retourné par l'api
                        }
                    />
                ))}
                </div>
                <div className="property__tags">
                    {propertyData.tags?.map((tag, index) => (
                        <p className="property__tag" key={index}>{tag}</p>
                    ))}
                </div>
            </div>
            <div className="property__collapse__contenair">
                <Collapse title="Description" content={propertyData.description} />
                <Collapse title="Equipements" content={propertyData.equipments} />
            </div>
        </div>
    );
}

export default Property;
