import { useState, useEffect } from 'react';
import '/src/components/Properties_Grid/Properties_Grid.css';
import { getAllProperties } from '../../scripts/api';
import { Link } from "react-router";

function PropertiesGrid() {
    const [propertiesData, setPropertiesData] = useState([]); // État pour stocker les propriétés
    const [error, setError] = useState(null); // État pour gérer les erreurs

    // Utilisation de useEffect pour récupérer les données
    useEffect(() => {
        async function fetchProperties() {
            const result = await getAllProperties();
            if (result.success) {
                console.log(result);
                setPropertiesData(result.data); // Met à jour l'état avec les données
            } else {
                setError('Echec de la récupération des logements. Veuillez réesayer ultérieurement.'); // Stocke l'erreur
            }
        }
        fetchProperties();
    }, []); // Le tableau vide [] garantit que le useEffect s'exécute uniquement au montage

    if (error) {
        return <p>{error}</p>; 
    }

    if (propertiesData.length === 0) {
        return <p>Chargement des logements...</p>; // Affiche un message de chargement si les données ne sont pas encore disponibles lors de l'arrivée sur la page
    }

    return (
        <section className="properties__section">
            {propertiesData.map((property) => ( // On map sur les résultats de l'api et on créer notre élément avec un <Link> pointant vers la page de fiche logement
                <div key={property.id} className="property__card" style={{backgroundImage: `url(${property.cover})`}}>
                    <Link 
                    to={{
                        pathname: "/property",
                        search: `?id=${property.id}`
                        }} 
                    />
                    <div className="property__card__bg__filter">
                        <h2 className="property__card__title">{property.title}</h2>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default PropertiesGrid;
