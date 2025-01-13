import { useState, useEffect } from 'react';
import { getProperty } from '../../scripts/api';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Collapse from '../../components/Collapse/Collapse';
import '/src/pages/Property/Property.css';
import PropertySlider from '../../components/Property_Slider/Property_Slider';

function Property() {
    const [propertyData, setPropertyData] = useState(null); // État pour stocker les données
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 650); // Détection de la taille de l'écran
    const [searchParams] = useSearchParams(); // Hook pour récupérer les paramètres d'URL
    const navigate = useNavigate();
    const propertyId = searchParams.get("id");

    // Gestion du redimensionnement
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 650);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const fetchPropertyData = async () => {
            try {
                const result = await getProperty(propertyId);
                if (result.success) {
                    setPropertyData(result.data); // Met à jour les données
                } else {
                    navigate('/404'); // Redirection vers la page 404 si l'API ne trouve pas de logement correspondant
                }
            } catch {
                console.error('Erreur lors de la récupération des données, veuillez réessayer ultérieurement');
            }
        };

        fetchPropertyData();
    }, [propertyId]);

    if (!propertyData) {
        return <p>Chargement des données...</p>;
    }

    return (
        <div>
            <PropertySlider pictures={propertyData.pictures} /> {/* Slider d'images */}

            {!isMobile ? (
                <>
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
                            {Array.from({ length: 5 }).map((_, index) => (
                                <img
                                    key={index}
                                    className={"property__rating__star"}
                                    src={
                                        index < (parseInt(propertyData.rating) || 0)
                                            ? './src/assets/images/star_active.png'
                                            : './src/assets/images/star_inactive.png'
                                    }
                                />
                            ))}
                        </div>
                        <div className="property__tags">
                            {propertyData.tags?.map((tag, index) => (
                                <p className="property__tag" key={index}>
                                    {tag}
                                </p>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="property__title__location">
                        <h1 className="property__title">{propertyData.title}</h1>
                        <p className="property__location">{propertyData.location}</p>
                    </div>
                    <div className="property__tags">
                        {propertyData.tags?.map((tag, index) => (
                            <p className="property__tag" key={index}>
                                {tag}
                            </p>
                        ))}
                    </div>
                    <div className="property__infos__row__2">
                        <div className="property__rating">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <img
                                    key={index}
                                    className={"property__rating__star"}
                                    src={
                                        index < (parseInt(propertyData.rating) || 0)
                                            ? './src/assets/images/star_active.png'
                                            : './src/assets/images/star_inactive.png'
                                    }
                                />
                            ))}
                        </div>
                        <div className="property__host">
                            <p className="property__host__name">{propertyData.host.name}</p>
                            <img className="property__host__picture" src={propertyData.host.picture} alt="Hôte" />
                        </div>
                    </div>
                </>
            )}

            <div className="property__collapse__contenair">
                <Collapse title="Description" content={propertyData.description} />
                <Collapse title="Equipements" content={propertyData.equipments} />
            </div>
        </div>
    );
}

export default Property;
