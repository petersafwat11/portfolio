import '../styles/globals.css'
import ContextProvider from '../store/ContextProvider';

function MyApp({ Component, pageProps }) {
  return (
  <ContextProvider>
    <Component {...pageProps} />
  </ContextProvider>
  )
}

export default MyApp
