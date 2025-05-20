import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import MenuCard from '../menu/MenuCard';

const Outstanding = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ playOnInit: true }),
  ]);
  
  const [featuredItems, setFeaturedItems] = useState([]);
  useEffect(() => {
    const fetchFeaturedItems = async () => {
      try {
        const res = await fetch('https://mockend.com/api/JairoMolano/flore-menu/dishes');
        const data = await res.json();
        const filtered = data.filter(item => item.label && item.label.trim() !== '');
        setFeaturedItems(filtered);
      } catch (error) {
        console.error('Error cargando los platos:', error);
      }
    };

    fetchFeaturedItems();
  }, []);

  return (
    <>
      <div className='flex flex-col items-center text-center mt-25'>
        <h2 className="tittle mb-6">Menú destacado</h2>
        <p className="description mb-12">
          Te invitamos a descubrir un menú que celebra la frescura, la creatividad y el sabor.
        </p>
      </div>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container py-3">
            {featuredItems.map((item, idx) => (
              <div className="embla__slide" key={idx}>
                <MenuCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Outstanding;
