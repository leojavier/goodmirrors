import * as React from "react";
import Link from "next/link";
import ToggleTheme from "./theme-toggle";
import { useRouter } from "next/router";


const Header = (props) => {
  const router = useRouter();


  return (
    <section className="container header">
      <img className="header__grant__woman" src="images/Grant_girls_1.png" alt=""/>
      <h1> The Emerging Visionary Grant </h1>
      <a className='button'  href="https://form.jotform.com/210458198232052" target="blank">Apply Now!</a>
    </section>
    
  );
};
export default Header;
