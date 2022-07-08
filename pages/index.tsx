import type { NextPage } from 'next';
import IndexSliderComponent from '../components/index/slider/index-slider-component';
import LayoutComponent from '../components/layout/layout.component';

const Home: NextPage = () => {
  return (
    <LayoutComponent>
      <IndexSliderComponent />
    </LayoutComponent>
  )
}

export default Home;

