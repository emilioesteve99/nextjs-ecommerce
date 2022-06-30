import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return <div>
    <Link href={'/login'}>
      <a>LOGIN</a>
    </Link>
    <br />
    <Link href={'/category'}>
      <a>CATEGORY</a>
    </Link>
    <br />
    <Link href={'/product/1-2-asdff'}>
      <a>PRODUCT</a>
    </Link>
    <br />
    <Link href={'/cart'}>
      <a>CART</a>
    </Link>
    <br />
    <Link href={'/checkout'}>
      <a>CHECKOUT</a>
    </Link>
  </div>;
}

export default Home;

