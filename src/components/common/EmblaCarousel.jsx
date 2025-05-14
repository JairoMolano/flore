import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import MenuCard from './MenuCard';

import freshStartImages from '../../data/Images/freshStart';

const items = [
  {
    title: 'Bowl de Açaí',
    description: 'Smoothie bowl con frutas frescas y granola.',
    price: '$22.000',
    image: freshStartImages.BowlAcai,
    label: '',
  },
  {
    title: 'Ensalada César',
    description: 'Ensalada fresca con pollo, crutones y aderezo César.',
    price: '$18.000',
    image: freshStartImages.BowlChiaMatcha,
    label: '',
  },
  {
    title: 'Wrap de Pollo',
    description: 'Wrap relleno de pollo, vegetales y salsa especial.',
    price: '$20.000',
    image: freshStartImages.BowlFrutal,
    label: '',
  },
];

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {items.map((item, index) => (
          <div className="embla__slide flex justify-center" key={index}>
            <div className="max-w-4xl my-4">
              <MenuCard
                title={item.title}
                description={item.description}
                price={item.price}
                image={item.image}
                label={item.label}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmblaCarousel;