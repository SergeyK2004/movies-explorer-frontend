import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg';
import MainMenu from '../MainMenu/MainMenu';
import Wrapper from '../Wrapper/Wrapper';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClose() {
    setIsOpen(false);
  }
  function handleOpen() {
    setIsOpen(true);
  }

  return (
    <>
      <header className="header root__content">
        <Link to="/">
          <img src={logo} alt="Logo" className="header__logo"></img>
        </Link>
        <MainMenu isWrapper={false} />
        <button
          type="button"
          onClick={handleOpen}
          className="header__menu-button"
        />
      </header>
      {isOpen && <Wrapper handleClose={handleClose} />}
    </>
  );
}

export default Header;
