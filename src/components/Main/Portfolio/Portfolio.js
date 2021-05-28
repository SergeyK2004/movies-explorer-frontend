import React from 'react';
import './Portfolio.css';
import arrow from '../../../images/portfolio_arrow.svg';
import photo from '../../../images/sergeys_photo.jpg';

function Portfolio() {
  return (
    <section class="portfolio  root__section" id="portfolio">
      <div class="portfolio__content root__content">
        <h2 class="portfolio__title">Студент</h2>
        <div class="portfolio__about">
          <div class="portfolio__description">
            <h3 class="portfolio__label">Сергей</h3>
            <p class="portfolio__profession">Фронтенд-разработчик, 46 лет</p>
            <p class="portfolio__text">
              Я родился и живу в Южно-Сахалинске, закончил факультет экономики
              ДВГУПС. С самой школы мечтал стать программистом и мечта сбылась.
              Последние 20 лет работал в собственной компании, занимаясь
              внедрением и сопровождением продуктов 1С. Имея огромный опыт
              работы с пользователями и владельцами бизнесов, пришел к решению
              реализовать себя в сфере интернет-технологий. В 2021 году окончил
              курс в Яндекс.Практикуме по специальности Веб-разработчик.
            </p>
            <div class="portfolio__social">
              <a
                class="portfolio__about-link"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/SergeyK2004"
              >
                Github
              </a>
            </div>
          </div>
          <img class="portfolio__photo" src={photo} alt="Фото"></img>
        </div>
        <p class="portfolio__chapter">Портфолио</p>
        <div class="portfolio__links">
          <a
            class="portfolio__link"
            href="https://github.com/SergeyK2004/how-to-learn"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт
          </a>
          <img src={arrow} alt="Стрелка"></img>
        </div>
        <div class="portfolio__links">
          <a
            class="portfolio__link"
            href="https://github.com/SergeyK2004/russian-travel"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт
          </a>
          <img src={arrow} alt="Стрелка"></img>
        </div>
        <div class="portfolio__links">
          <a
            class="portfolio__link"
            href="https://github.com/SergeyK2004/react-mesto-auth"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение
          </a>
          <img src={arrow} alt="Стрелка"></img>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
