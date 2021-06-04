import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg';
import Header from '../../Landing/Header/Header';
import './Promo.css';

function Promo({ loggedIn }) {
  return (
    <section className="promo  root__section">
      {!loggedIn ? (
        <div className="promo__header root__content">
          <img src={logo} alt="Лого" className="promo__logo"></img>
          <div className="promo__auth">
            <Link to="signup" className="promo__reg">
              Регистрация
            </Link>
            <Link to="signin" className="promo__in">
              Войти
            </Link>
          </div>
        </div>
      ) : (
        <Header isPromo />
      )}
      <div className="promo__main root__content">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
      </div>
      <div className="promo__footer">
        <nav className="promo__links">
          <a className="promo__link" href="#about">
            О проекте
          </a>
          <a className="promo__link" href="#techs">
            Технологии
          </a>
          <a className="promo__link" href="#portfolio">
            Студент
          </a>
        </nav>
      </div>
    </section>
  );
}

export default Promo;
