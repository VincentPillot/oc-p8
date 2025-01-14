import { useState, useEffect } from 'react';
import '/src/components/Properties_Grid/Properties_Grid.css';
import { getAllProperties } from '../../scripts/api';
import { Link } from "react-router";

function PropertiesGrid() {
    const [propertiesData, setPropertiesData] = useState([]); // État pour stocker les propriétés
    const [adjustedPropertiesData, setAdjustedPropertiesData] = useState([]); // État pour ajuster les propriétés
    const [error, setError] = useState(null); // État pour gérer les erreurs

    // Utilisation de useEffect pour récupérer les données
    useEffect(() => {
        async function fetchProperties() {
            const result = await getAllProperties();
            if (result.success) {
                setPropertiesData(result.data); // Met à jour l'état avec les données
            } else {
                setError('Échec de la récupération des logements. Veuillez réessayer ultérieurement.'); // Stocke l'erreur
            }
        }
        fetchProperties();
    }, []); // Le tableau vide [] garantit que le useEffect s'exécute uniquement au montage

    // Ajustement des données pour ajouter une carte vide si nécessaire
    useEffect(() => {
        const screenWidth = window.innerWidth;

        if (screenWidth > 1040) {
            const remainder = propertiesData.length % 3;

            if (remainder === 2) {
                // Ajoute une carte vide aux data si le reste est 2
                setAdjustedPropertiesData([...propertiesData, { id: "empty", title: "", cover: "" }]);
            } else {
                setAdjustedPropertiesData(propertiesData); // Sinon, garde les données d'origine
            }
        } else {
            setAdjustedPropertiesData(propertiesData); // Si l'écran est < 1040px, aucune modification
        }
    }, [propertiesData]);

    if (error) {
        return <p>{error}</p>; 
    }

    if (propertiesData.length === 0) {
        return <p>Chargement des logements...</p>; // Affiche un message de chargement si les données ne sont pas encore disponibles
    }

    return (
        <section className="properties__section">
            {adjustedPropertiesData.map((property) => (
                <div
                    key={property.id}
                    className={`property__card ${property.id === "empty" ? "property__card__empty" : ""}`}
                    style={{ backgroundImage: property.cover ? `url(${property.cover})` : "none" }}
                >
                    {property.id !== "empty" && (
                        <>
                            <Link
                                to={{
                                    pathname: "/property",
                                    search: `?id=${property.id}`,
                                }}
                            />
                            <div className="property__card__bg__filter">
                                <h2 className="property__card__title">{property.title}</h2>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </section>
    );
}

export default PropertiesGrid;
