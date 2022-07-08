import '../styles/globals.css'
import type { AppProps } from 'next/app'

function Ecommerce({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default Ecommerce;
