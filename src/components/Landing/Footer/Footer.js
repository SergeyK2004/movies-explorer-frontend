import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <section class="footer  root__content">
      <p class="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div class="footer__end">
        <p class="footer__copyright">© 2021</p>
        <div class="footer__links">
          <a
            rel="noreferrer"
            class="footer__link"
            target="_blank"
            href="https://praktikum.yandex.ru"
          >
            Яндекс.Практикум
          </a>
          <a
            rel="noreferrer"
            class="footer__link"
            target="_blank"
            href="https://github.com"
          >
            Github
          </a>
          <a
            rel="noreferrer"
            class="footer__link"
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
