import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <section className="footer  root__content">
      <p className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__end">
        <p className="footer__copyright">© 2021</p>
        <div className="footer__links">
          <a
            rel="noreferrer"
            className="footer__link"
            target="_blank"
            href="https://praktikum.yandex.ru"
          >
            Яндекс.Практикум
          </a>
          <a
            rel="noreferrer"
            className="footer__link"
            target="_blank"
            href="https://github.com"
          >
            Github
          </a>
          <a
            rel="noreferrer"
            className="footer__link"
            target="_blank"
            href="https://ru-ru.facebook.com/"
          >
            Facebook
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
