import React from 'react';

const SectionWithImage = ({ title, description, imgSrc, imgFirst = false }) => {
return (
    <div className={`w-full h-auto flex flex-col md:flex-row mt-10 px-5 ${imgFirst ? 'md:flex-row-reverse' : ''}`}>
        <div className="md:w-1/2 flex justify-center items-center">
            <img
                className="w-full h-auto rounded-lg"
                src={imgSrc}
                alt={`Imagen de ${title}`}
            />
        </div>
        <div className="md:w-1/2 p-5">
            <h2 className="text-3xl font-semibold mb-4">{title}</h2>
            <p className="text-lg leading-relaxed text-justify">{description}</p>
        </div>
    </div>
);
};

export default SectionWithImage;