import './Movies.css';
import React from 'react';
import Header from '../Landing/Header/Header';
import SearchForm from '../Landing/SearchForm/SearchForm';
import Footer from '../Landing/Footer/Footer';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import More from './More/More';

function Movies({ handleFormSubmit }) {
  return (
    <>
      <Header></Header>
      <SearchForm handleFormSubmit={handleFormSubmit}></SearchForm>
      <MoviesCardList saved={false}></MoviesCardList>
      <More></More>
      <Footer></Footer>
    </>
  );
}

export default Movies;
