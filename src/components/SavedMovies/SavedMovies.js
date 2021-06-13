import './SavedMovies.css';
import React from 'react';
import Header from '../Landing/Header/Header';
import SearchForm from '../Landing/SearchForm/SearchForm';
import Footer from '../Landing/Footer/Footer';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

function SavedMovies({
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
  setActivPage('usersVideo');
  const counterCard = showMoviesArray.length;
  const wasSearching = Boolean(searchString);
  return (
    <>
      <Header></Header>
      <SearchForm
        handleFormSubmit={handleSearchFormSubmit}
        changeCheckbox={changeCheckbox}
        searchString={searchString}
        checkboxValue={checkboxValue}
        pageForSearch={'usersVideo'}
      ></SearchForm>
      <MoviesCardList
        saved={true}
        searching={isUploadData}
        moviesArray={showMoviesArray}
        counterCard={counterCard}
        checkboxValue={checkboxValue}
        wasSearching={wasSearching}
        hasError={hasError}
        handleLikeClick={handleLikeClick}
      />
      <Footer></Footer>
    </>
  );
}

export default SavedMovies;
