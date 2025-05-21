import { useTranslation } from 'react-i18next';
import SpawnAnimation from '../components/common/SpawnAnimation';
import OurHistory from '../components/us/OurHistory';
import Header from '../components/common/Header';
import SectionWithImage from '../components/us/SectionWithImage';

import headerImg from '../assets/img/us/header.png';
import misionImg from '../assets/img/us/mision.jpeg';
import visionImg from '../assets/img/us/vision.jpeg';
import valoresImg from '../assets/img/us/valores.jpeg';

const Us = () => {
  const { t } = useTranslation('common');

  const aboutUsSections = [
    {
      id: 1,
      title: t('aboutUs.mission.title'),
      description: t('aboutUs.mission.description'),
      imgSrc: misionImg,
      imgFirst: false,
    },
    {
      id: 2,
      title: t('aboutUs.vision.title'),
      description: t('aboutUs.vision.description'),
      imgSrc: visionImg,
      imgFirst: true,
    },
    {
      id: 3,
      title: t('aboutUs.values.title'),
      description: t('aboutUs.values.description')
        .split('\n')
        .map((line, idx) => <p key={idx} className="mb-2">{line}</p>),
      imgSrc: valoresImg,
      imgFirst: false,
    },
  ];

  return (
    <div>
      <Header
        imgSrc={headerImg}
        description={t('usHeaderDescription.description')}
      />

      <SpawnAnimation>
        <OurHistory />
      </SpawnAnimation>

      {aboutUsSections.map((section) => (
        <SpawnAnimation key={section.id}>
          <SectionWithImage
            title={section.title}
            description={section.description}
            imgSrc={section.imgSrc}
            imgFirst={section.imgFirst}
          />
        </SpawnAnimation>
      ))}
    </div>
  );
};

export default Us;