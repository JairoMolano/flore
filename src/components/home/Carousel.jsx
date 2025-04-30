import React, { useEffect, useState } from 'react';

import slide1 from '../../assets/img/home/carousel/slide-1.jpg';
import slide2 from '../../assets/img/home/carousel/slide-2.jpg';
import slide3 from '../../assets/img/home/carousel/slide-3.jpg';

const Carousel = () => {    
    const images = [slide1, slide2, slide3];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
            <div className="carousel w-full h-full relative">
                {images.map((src, index) => (
                    <div
                        key={index}
                        id={`item${index + 1}`}
                        className={`carousel-item w-full ${activeIndex === index ? '' : 'hidden'}`}
                    >
                        <img src={src} className="w-full object-cover" alt={`Carousel item ${index + 1}`} />
                    </div>
                ))}
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`btn btn-circle btn-xs`}
                        style={{
                            backgroundColor: activeIndex === index ? '#FFB6C1' : 'transparent',
                        }}
                    >  
                    </button>
                ))}
            </div>
        </>
    );
};

export default Carousel;
