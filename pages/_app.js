/* eslint react/prop-types: 0, react/react-in-jsx-scope: 0 */
import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
