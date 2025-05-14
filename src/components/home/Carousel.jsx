import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import slide1 from '../../assets/img/home/carousel/slide-1.jpg';
import slide2 from '../../assets/img/home/carousel/slide-2.jpg';
import slide3 from '../../assets/img/home/carousel/slide-3.jpg';

const Carousel = () => {
    const slides = [
        { image: slide1, title: '¿Listo para comenzar tu día con un desayuno inolvidable?', 
           description: 'Floré, el desayuno especial.', 
           button: 'menu' },
        { image: slide2, title: 'Un rincón acogedor donde la comida se convierte en magia', 
            description: 'Ven y disfruta de sabores únicos.', button: 'Reserva tu mesa →', 
            link: '/menu' },
        { image: slide3, title: 'Delicias frescas, ambiente cálido y atención de primera', 
            description: 'Ingredientes seleccionados con cariño.', button: 'Conoce nuestro menú →', 
            link: '/menu' }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [activeIndex, slides.length, isHovered]);

    return (
        <div className="relative w-full h-[600px] overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>

            {slides.map((slide, index) => (
                <div key={index} className={`absolute w-full h-full transition-all duration-700 ease-in-out 
                    ${activeIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                    
                    <img src={slide.image} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} />

                    <div className="absolute inset-0 bg-black/30 flex justify-center items-center text-center px-4">
                        <div className="bg-white/40 backdrop-blur-md p-6 md:p-10 rounded-3xl text-purple-900 max-w-2xl shadow-lg">
                            <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-snug">{slide.title}</h2>
                            <p className="text-base md:text-lg mb-6">{slide.description}</p>
                            {slide.button && (
                                <Link to={slide.link} className="bg-white text-purple-700 py-2 px-6 rounded-full text-base md:text-lg font-medium hover:bg-gray-100">
                                    {slide.button}
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            ))}

            <div className="absolute inset-x-0 bottom-5 flex justify-center gap-2">
                {slides.map((_, index) => (
                    <button key={index} onClick={() => setActiveIndex(index)} className={`w-4 h-4 rounded-full transition-all duration-300
                        ${activeIndex === index ? 'bg-purple-500 scale-125 shadow-md' : 'bg-gray-300'}`} aria-label={`Ir al slide ${index + 1}`} />
                ))}
            </div>
        </div>
    );
};

export default Carousel;