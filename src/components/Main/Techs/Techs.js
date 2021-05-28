import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <>
      <section class="techs  root__section" id={'techs'}>
        <div class="techs__content root__content">
          <h2 class="techs__title">Технологии</h2>
          <h3 class="techs__label">7 технологий</h3>
          <p class="techs__text">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
          <div class="techs__list">
            <div class="techs__item">HTML</div>
            <div class="techs__item">CSS</div>
            <div class="techs__item">JS</div>
            <div class="techs__item">React</div>
            <div class="techs__item">Git</div>
            <div class="techs__item">Express.js</div>
            <div class="techs__item">mongoDB</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Techs;
