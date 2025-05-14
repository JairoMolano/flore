import React from 'react';
import Card from '../common/card';
import aboutUsCards from '../../data/aboutUsCards';
import EmblaCarousel from '../common/EmblaCarousel'



const AboutUs = () => {
    
    

    return (
        <div className="flex flex-col items-center py-12 px-4">
            <h1 className="text-4xl font-extrabold mb-10 text-gray-600 text-center">
                ¿Por qué elegirnos?
            </h1>
            <div className="flex flex-row flex-wrap gap-4 md:gap-8 justify-center">
                {aboutUsCards.map((card) => (
                    <Card
                        key={card.id}
                        imgSrc={card.imgSrc}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>

            {/* Menú destacado dinámico */}
            <h2 className="text-4xl text-gray-600 font-extrabold mt-12 mb-4 text-center animate-fadeIn">
                Menú destacado
            </h2>
            <p className="text-center max-w-2xl mb-8 text-base md:text-lg text-gray-600">
                Te invitamos a descubrir un menú que celebra la frescura, la creatividad y el sabor.
            </p>

            {/* Galería de menú con imágenes organizadas */}
        </div>
    );
};

export default AboutUs;