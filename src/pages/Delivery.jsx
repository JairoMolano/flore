import Header from '../components/common/Header';
import OrderNow from '../components/delivery/OrderNow';
import FindUs from '../components/common/FindUs';
import deliveryImg from '../assets/img/delivery/delivery.png'
import SpawnAnimation from '../components/common/SpawnAnimation';

const Delivery = () => {
  return (
      <>
      <Header
        imgSrc={deliveryImg}
        title="Domicilios"
        description="¡Haz tu pedido y recibe Floré en casa!"
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