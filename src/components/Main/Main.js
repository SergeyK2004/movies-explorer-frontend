import React from 'react';
import Promo from './Promo/Promo';
import Techs from './Techs/Techs';
import AboutProject from './AboutProject/AboutProject';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Landing/Footer/Footer';

import './Main.css';

function Main() {
  return (
    <div class="main">
      <Promo isAuth />
      <AboutProject />
      <Techs />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default Main;
