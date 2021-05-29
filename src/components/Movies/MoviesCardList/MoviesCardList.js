import React from 'react';
import poster from '../../../images/poster.png';
import poster1 from '../../../images/poster1.png';
import './MoviesCardList.css';

function MoviesCardList({ saved }) {
  const cardLikeButtonClassName = saved ? 'card__like_saved' : 'card__like';

  return (
    <section className="root__section moviesCardList">
      <ul className="root__content cardList">
        <li className="card">
          <div className="card__info">
            <p className="card__title">33 слова о дизайне</p>
            <p className="card__duration">1ч 42м</p>
            <button className={cardLikeButtonClassName} type="button"></button>
          </div>
          <img className="card__img" alt="Постер" src={poster}></img>
        </li>
        <li className="card">
          <div className="card__info">
            <p className="card__title">Киноальманах «100 лет дизайна»</p>
            <p className="card__duration">1ч 42м</p>
            <button className={cardLikeButtonClassName} type="button"></button>
          </div>
          <img className="card__img" alt="Постер" src={poster1}></img>
        </li>
      </ul>
    </section>
  );
}

export default MoviesCardList;
