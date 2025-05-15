import Carousel from '../components/home/Carousel'
import ChooseUs from '../components/home/ChooseUs'
import Outstanding from '../components/home/Outstanding'
import FindUs from '../components/common/FindUs'
import SpawnAnimation from '../components/common/SpawnAnimation';

const Home = () => {

  return (
    <>
      <Carousel />
      <SpawnAnimation>
        <ChooseUs />
      </SpawnAnimation>
      <SpawnAnimation>
        <Outstanding />
      </SpawnAnimation>
      <SpawnAnimation>
        <FindUs />
      </SpawnAnimation>
    </>
  )
}

export default Home