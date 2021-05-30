import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg';
import MainMenu from '../MainMenu/MainMenu';
import Wrapper from '../Wrapper/Wrapper';
import './Header.css';

function Header(props) {
  const { isPromo = false } = props;
  const [isOpen, setIsOpen] = useState(false);
  function handleClose() {
    setIsOpen(false);
  }
  function handleOpen() {
    setIsOpen(true);
  }
  const buttonClass = isPromo
    ? 'header__menu-button_white'
    : 'header__menu-button';
  return (
    <>
      <header className="header root__content">
        <Link to="/">
          <img src={logo} alt="Logo" className="header__logo"></img>
        </Link>
        <MainMenu isWrapper={false} isPromo={isPromo} />
        <button type="button" onClick={handleOpen} className={buttonClass} />
      </header>
      {isOpen && <Wrapper handleClose={handleClose} />}
    </>
  );
}

export default Header;
