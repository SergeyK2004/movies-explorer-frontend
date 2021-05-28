import './SavedMovies.css';
import React from 'react';
import Header from '../Landing/Header/Header';
import SearchForm from '../Landing/SearchForm/SearchForm';
import Footer from '../Landing/Footer/Footer';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

function SavedMovies({ handleFormSubmit }) {
  return (
    <>
      <Header></Header>
      <SearchForm handleFormSubmit={handleFormSubmit}></SearchForm>
      <MoviesCardList saved={true}></MoviesCardList>
      <Footer></Footer>
    </>
  );
}

export default SavedMovies;
