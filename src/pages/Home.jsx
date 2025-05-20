import Carousel from '../components/home/Carousel'
import ChooseUs from '../components/home/ChooseUs'
import Outstanding from '../components/home/Outstanding'
import FindUs from '../components/common/FindUs'
import SpawnAnimation from '../components/common/SpawnAnimation';
import map from '../assets/img/common/find-us/map.jpg'

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