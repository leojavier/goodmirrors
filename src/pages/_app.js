import {useEffect} from "react";
import Header from "../components/header";
import { ThemeProvider } from "../components/providers";
import '../assets/styles/index.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <ThemeProvider>
      <Header />
      <section style={{height:'100ch'}}>t</section>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
