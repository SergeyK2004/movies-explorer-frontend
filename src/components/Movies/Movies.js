import './Movies.css';
import React, { useState } from 'react';
import Header from '../Landing/Header/Header';
import SearchForm from '../Landing/SearchForm/SearchForm';
import Footer from '../Landing/Footer/Footer';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import More from './More/More';

function Movies({
  handleSearchFormSubmit,
  changeCheckbox,
  searchString,
  checkboxValue,
  isUploadData,
  showMoviesArray,
  hasError,
  setActivPage,
  handleLikeClick,
}) {
  const [counterCard, setCounterCard] = useState(5);
  const [quantityCard, setQuantityCard] = useState(0);
  const wasSearching = Boolean(searchString);

  function setQuantity(arrayOfFilms, check) {
    let quantityElements = 0;
    if (check) {
      quantityElements = arrayOfFilms.reduce(function (counter, item) {
        counter += item.duration <= 40 ? 1 : 0;
        return counter;
      }, 0);
    } else {
      quantityElements = arrayOfFilms.length;
    }
    setQuantityCard(quantityElements);
  }
  function moreClick() {
    setCounterCard(counterCard + 5);
  }

  React.useEffect(() => {
    setActivPage('video');
    setQuantity(showMoviesArray, checkboxValue);
    setCounterCard(5);
  }, [showMoviesArray, checkboxValue, setActivPage]);

  return (
    <>
      <Header></Header>
      <SearchForm
        handleFormSubmit={handleSearchFormSubmit}
        changeCheckbox={changeCheckbox}
        searchString={searchString}
        checkboxValue={checkboxValue}
        pageForSearch={'video'}
      ></SearchForm>
      <MoviesCardList
        saved={false}
        searching={isUploadData}
        moviesArray={showMoviesArray}
        counterCard={counterCard}
        checkboxValue={checkboxValue}
        wasSearching={wasSearching}
        hasError={hasError}
        handleLikeClick={handleLikeClick}
      ></MoviesCardList>
      {quantityCard > counterCard && <More moreClick={moreClick} />}
      <Footer></Footer>
    </>
  );
}

export default Movies;
