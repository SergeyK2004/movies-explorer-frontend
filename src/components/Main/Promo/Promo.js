import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg';
import Header from '../../Landing/Header/Header';
import './Promo.css';

function Promo({ isAuth }) {
  return (
    <section class="promo  root__section">
      {!isAuth ? (
        <div class="promo__header root__content">
          <img src={logo} alt="Лого" class="promo__logo"></img>
          <div class="promo__auth">
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
      <div class="promo__main root__content">
        <h1 class="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
      </div>
      <div class="promo__footer">
        <nav class="promo__links">
          <a class="promo__link" href="#about">
            О проекте
          </a>
          <a class="promo__link" href="#techs">
            Технологии
          </a>
          <a class="promo__link" href="#portfolio">
            Студент
          </a>
        </nav>
      </div>
    </section>
  );
}

export default Promo;
