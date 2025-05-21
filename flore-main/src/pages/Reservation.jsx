import { useTranslation } from 'react-i18next';
import reservationImg from '../assets/img/reservation/reservation.png';
import Header from '../components/common/Header';
import ReserveTable from '../components/reservation/ReserveTable';
import FindUs from '../components/common/FindUs';
import SpawnAnimation from '../components/common/SpawnAnimation';

const Reservation = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <Header
        imgSrc={reservationImg}
        description={t('reservationHeaderDescription.description')}
      />
      <SpawnAnimation>
        <ReserveTable />
      </SpawnAnimation>
      <SpawnAnimation>
        <FindUs />
      </SpawnAnimation>
    </>
  );
};

export default Reservation;