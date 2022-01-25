import React from 'react';
import EmptyResult from '../EmptyResult/EmptyResult';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';

function MoviesCardList({
  saved,
  searching,
  moviesArray,
  counterCard,
  checkboxValue,
  wasSearching,
  hasError,
  handleLikeClick,
}) {
  let emptyMessage = 'Ничего не найдено';

  if (hasError) {
    emptyMessage =
      'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
  }

  function createArray() {
    let counter = 0;
    const result = (element) => {
      if (counter < counterCard) {
        if (checkboxValue) {
          if (element.duration < 40) {
            counter += 1;
            return true;
          } else {
            return false;
          }
        } else {
          counter += 1;
          return true;
        }
      }
    };
    return result;
  }
  const checkArray = createArray();

  const arrayForUser = moviesArray.filter((item) => checkArray(item));

  return (
    <section className="root__section moviesCardList">
      {searching ? (
        <Preloader />
      ) : arrayForUser.length > 0 ? (
        <ul className="root__content cardList">
          {arrayForUser.map((element, i) => (
            <MoviesCard
              card={element}
              saved={saved}
              key={i}
              handleLikeClick={handleLikeClick}
            />
          ))}
        </ul>
      ) : (
        wasSearching && <EmptyResult message={emptyMessage} />
      )}
    </section>
  );
}

export default MoviesCardList;
