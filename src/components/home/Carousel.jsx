import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import slide1Img from '../../assets/img/home/carousel/slide_1.jpg';
import slide2Img from '../../assets/img/home/carousel/slide_2.jpg';
import slide3Img from '../../assets/img/home/carousel/slide_3.jpg';

const Carousel = () => {
  const { t } = useTranslation('common');
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      image: slide1Img,
      title: t('carousel.slide1.title'),
      description: t('carousel.slide1.description'),
      button: t('carousel.slide1.button'),
      link: '/us',
    },
    {
      image: slide2Img,
      title: t('carousel.slide2.title'),
      description: t('carousel.slide2.description'),
      button: t('carousel.slide2.button'),
      link: '/reservation',
    },
    {
      image: slide3Img,
      title: t('carousel.slide3.title'),
      description: t('carousel.slide3.description'),
      button: t('carousel.slide3.button'),
      link: '/menu',
    },
  ];

  useEffect(() => {
  const interval = setInterval(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, 7000);

  return () => clearInterval(interval);
  }, [slides.length]);


  return (
    <div
      className="relative w-full overflow-hidden z-0"
      style={{ height: `calc(100vh - var(--navbar-height))` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-0 left-0 w-full h-50 bg-gradient-to-b from-black/90 to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-50 bg-gradient-to-t from-black/90 to-transparent z-20 pointer-events-none" />

      {slides.map((slide, index) => {
        const isActive = activeIndex === index;
        return (
          <div
            key={index}
            className={`absolute w-full h-full transition-all duration-1000 ease-in-out
              ${isActive ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-90 z-0'}`}
            style={{ pointerEvents: isActive ? 'auto' : 'none' }}
          >
            <img
              src={slide.image}
              className={`w-full h-full object-cover transition-transform duration-700 
                ${isActive ? 'kenburns' : ''}`}
              alt={`Slide ${index + 1}`}
            />
            <div className="absolute inset-0 bg-black/30 flex justify-center items-center text-center px-4">
              <div className="bg-white/40 backdrop-blur-md p-10 rounded-3xl text-purple-900 w-5xl shadow-lg z-10">
                <h2 className="tittle mb-6">{slide.title}</h2>
                <p className="description mb-6">{slide.description}</p>
                {slide.button && slide.link && (
                  <Link
                    to={slide.link}
                    className="bg-white text-[#9C7696] py-2 px-6 rounded-full text-lg font-medium hover-button-animation"
                  >
                    {slide.button}
                  </Link>
                )}
              </div>
            </div>
          </div>
        );
      })}

      <div className="absolute inset-x-0 bottom-5 flex justify-center gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300
              ${activeIndex === index ? 'bg-[#9C7696] scale-125 shadow-md' : 'bg-gray-300'}`}
            aria-label={`Ir al slide ${index + 1}`}
            type="button"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;