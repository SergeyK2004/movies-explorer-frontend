import React, { useState } from 'react';
import './MoviesCard.css';

function MoviesCard({ card, saved, handleLikeClick }) {
  function whatsClasslike() {
    const whatIsLike = card.like ? 'card__like_active' : 'card__like';
    return saved ? 'card__like_saved' : whatIsLike;
  }
  const [cardLikeButtonClassName, setCardLikeButtonClassName] = useState(
    whatsClasslike(),
  );
  const cardImage = saved
    ? card.image
    : `https://api.nomoreparties.co${card.image.url}`;
  console.log(card);
  function timing(dur) {
    let res = '';
    const minutes = dur % 60;
    const hours = parseInt(dur / 60);
    res += hours > 0 ? `${hours}ч ` : '';
    res += minutes > 0 ? `${minutes}м` : '';
    return res;
  }

  function onLikeClick() {
    handleLikeClick({ card, saved }).finally(() =>
      setCardLikeButtonClassName(whatsClasslike()),
    );
  }
  return (
    <li className="card">
      <div className="card__info">
        <div className="card__about">
          <p className="card__title">{card.nameRU}</p>
          <p className="card__duration">{timing(card.duration)}</p>
        </div>
        <div>
          <button
            onClick={onLikeClick}
            className={cardLikeButtonClassName}
            type="button"
          ></button>
        </div>
      </div>
      <img className="card__img" alt="Постер" src={cardImage}></img>
    </li>
  );
}

export default MoviesCard;
