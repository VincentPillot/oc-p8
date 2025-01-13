import { useState } from 'react';
import './Property_slider.css'

function PropertySlider({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0); // Index de l'image actuellement affichée

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="slider">
            {/* Image actuelle */}
            <img src={pictures[currentIndex]} alt={`Image ${currentIndex + 1}`} className="slider__images" />

            {/* Flèche gauche */}
            {pictures.length > 1 && (
                <img
                    src="./src/assets/images/slider__arrow__left.png"
                    alt="Image précédente"
                    className="slider__arrows slider__arrow__left"
                    onClick={handlePrevious}
                />
            )}

            {/* Flèche droite */}
            {pictures.length > 1 && (
                <img
                    src="./src/assets/images/slider__arrow__right.png"
                    alt="Image suivante"
                    className="slider__arrows slider__arrow__right"
                    onClick={handleNext}
                />
            )}

            {/* Compteur d'images */}
            {pictures.length > 1 && (
                <div className="slider__counter">
                    {currentIndex + 1}/{pictures.length}
                </div>
            )}
        </div>
    );
}

export default PropertySlider;
