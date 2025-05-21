import { useTranslation } from 'react-i18next';
import mapImg from '../../assets/img/common/find-us/map.jpg'

const FindUs = () => {
  const { t } = useTranslation('common');
  return (
    <>
    <div className="flex flex-col justify-center mx-auto text-center max-w-5xl mt-25">
      <h2 className="tittle mb-6">{t('findUs.title')}</h2>
      <p className=" description  mb-12">{t('findUs.description')}</p>
      <a 
        href="https://www.google.com/maps" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img 
          src={mapImg} 
          alt="Mapa de ubicación" 
          className="h-auto rounded-lg shadow-lg hover-animate cursor-pointer"
        />
      </a>
    </div>
    </>
  )
}

export default FindUs