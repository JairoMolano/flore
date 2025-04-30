import React from 'react';

import Card from '../common/card';
import aboutUsCards from '../../data/aboutUsCards';

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

            <h2 className="text-4xl text-gray-600 font-extrabold mt-12 mb-4 text-center">
                Menú destacado
            </h2>
            <p className="text-center max-w-2xl mb-8 text-base md:text-lg text-gray-600">
                Te invitamos a descubrir un menú que celebra la frescura, la creatividad y el sabor.
            </p>
            <img
                src=""
                alt="Menú destacado"
                className="w-full max-w-4xl rounded-lg shadow-lg"
            />
        </div>
    );
};

export default AboutUs;
