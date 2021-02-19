import {useEffect} from "react";
import Header from "../components/header";
import Banner from "../components/banner";
import Opportunity from "../components/opportunity";
import Criteria from "../components/criteria";
import Deadline from "../components/deadline";
import Social from "../components/social";
import Link from 'next/link'
import Footer from "../components/footer";
import { ThemeProvider } from "../components/providers";
import '../public/index.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <Link href='/test'>
    <ThemeProvider>
      <Header />
      <Banner />
      <Opportunity />
      <Criteria />
      <Deadline />
      <Social />
      {/* <Footer /> */}
      <Component {...pageProps} />
    </ThemeProvider>
    </Link>
  );
}

export default MyApp;
