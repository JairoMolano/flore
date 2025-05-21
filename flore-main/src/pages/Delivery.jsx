import { useTranslation } from 'react-i18next';
import Header from '../components/common/Header';
import OrderNow from '../components/delivery/OrderNow';
import FindUs from '../components/common/FindUs';
import deliveryImg from '../assets/img/delivery/delivery.png'
import SpawnAnimation from '../components/common/SpawnAnimation';

const Delivery = () => {
  const { t } = useTranslation('common');
  return (
      <>
      <Header
        imgSrc={deliveryImg}
        description={t('deliveryHeaderDescription.description')}
      />
      <SpawnAnimation>
        <OrderNow />
      </SpawnAnimation> 
      <SpawnAnimation>
        <FindUs />
      </SpawnAnimation> 
      </>
      
  );
};

export default Delivery;