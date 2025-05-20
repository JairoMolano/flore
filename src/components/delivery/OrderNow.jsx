import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import deliveryLogoImg from '../../assets/img/delivery/delivery_logo.png';

const OrderNow = () => {
  const { t } = useTranslation('common');

  return (
    <div>
      <div className="mt-25 max-w-5xl mx-auto flex flex-row items-center">
        <div className="w-1/2">
          <img
            className="w-full h-auto object-cover"
            src={deliveryLogoImg}
            alt="Delivery"
          />
        </div>
        <div className="w-1/2 text-center text-left pl-8">
          <h1 className="tittle mb-6">{t('orderNow.title')}</h1>
          <h3 className="description">
            {t('orderNow.description')}
          </h3>
        </div>
      </div>
      <div className="flex justify-center my-8">
        <Link to="/menu">
          <button className="px-6 py-3 bg-[#9C7696] text-white font-bold rounded hover-button-animation cursor-pointer">
            {t('orderNow.button')}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderNow;