import React from 'react';
import { NavLink } from 'react-router-dom';
import profile from '../../../images/profile.png';
import './MainMenu.css';

function MainMenu({ isWrapper, isPromo = false }) {
  const menuClass = isWrapper ? 'main-menu__wrapper' : 'main-menu';
  const linkClass = isPromo
    ? 'main-menu__link main-menu__link-promo'
    : 'main-menu__link';

  return (
    <div className={menuClass}>
      <div className="main-menu__links">
        {isWrapper && (
          <NavLink
            to="/"
            exact
            className="main-menu__link"
            activeClassName="main-menu__link-active"
          >
            Главная
          </NavLink>
        )}
        <NavLink
          to="/movies"
          className={linkClass}
          activeClassName="main-menu__link-active"
        >
          Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className={linkClass}
          activeClassName="main-menu__link-active"
        >
          Сохранённые фильмы
        </NavLink>
      </div>
      <NavLink
        to="/profile"
        className="main-menu__link"
        activeClassName="main-menu__link-active"
      >
        <div className="main-menu__profile">
          <p className="main-menu__profile-label">Аккаунт</p>
          <img
            src={profile}
            alt="Profile"
            className="main-menu__profile-img"
          ></img>
        </div>
      </NavLink>
    </div>
  );
}

export default MainMenu;
