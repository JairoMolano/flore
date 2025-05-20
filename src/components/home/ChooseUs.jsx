import { useTranslation } from 'react-i18next';
import ChooseUsCard from './ChooseUsCard';

import ingredientsImg from '../../assets/img/home/about-us/ingredients.jpg';
import scheduleImg from '../../assets/img/home/about-us/schedule.jpg';
import combinationsImg from '../../assets/img/home/about-us/combinations.jpg';

const ChooseUs = () => {
  const { t } = useTranslation('common');

  const cards = [
    {
      id: 1,
      imgSrc: ingredientsImg,
      title: t('chooseUs.cards.0.title'),
      description: t('chooseUs.cards.0.description'),
    },
    {
      id: 2,
      imgSrc: scheduleImg,
      title: t('chooseUs.cards.1.title'),
      description: t('chooseUs.cards.1.description'),
    },
    {
      id: 3,
      imgSrc: combinationsImg,
      title: t('chooseUs.cards.2.title'),
      description: t('chooseUs.cards.2.description'),
    },
  ];

  return (
    <div className="flex flex-col items-center mt-25">
      <h1 className="tittle mb-15">
        {t('chooseUs.title')}
      </h1>
      <div className="flex flex-row flex-wrap gap-20 justify-center max-w-5xl">
        {cards.map((card) => (
          <ChooseUsCard
            key={card.id}
            imgSrc={card.imgSrc}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;