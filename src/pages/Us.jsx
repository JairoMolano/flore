import Header from '../components/common/Header';
import OurHistory from '../components/us/OurHistory';
import SectionWithImage from '../components/us/SectionWithImage';
import SpawnAnimation from '../components/common/SpawnAnimation';
import aboutUsData from '../data/aboutUs';
import headerImg from '../assets/img/us/header.png';

const Us = () => {
  return (
    <div>
      <Header
        imgSrc={headerImg}
        title="Nuestra historia"
        description="Un rincón de sabor y calidez en el corazón de Neiva"
      />

      <SpawnAnimation>
        <OurHistory />
      </SpawnAnimation>
      {aboutUsData.map((section) => (
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