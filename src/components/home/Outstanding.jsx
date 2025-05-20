import { useTranslation } from 'react-i18next';
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import MenuCard from "../menu/MenuCard";
import useMenuData from "../../hooks/useMenuData";

const Outstanding = () => {
  const { t } = useTranslation('common');
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ playOnInit: true }),
  ]);

  const { featuredItems } = useMenuData();

  return (
    <>
      <div className='flex flex-col items-center text-center mt-25'>
        <h2 className="tittle mb-6">{t('outStanding.title')}</h2>
        <p className="description mb-12">{t('outStanding.description')}</p>
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