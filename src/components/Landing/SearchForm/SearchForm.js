import React, { useState } from 'react';
import search from '../../../images/search.png';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({
  handleFormSubmit,
  changeCheckbox,
  searchString,
  checkboxValue,
  pageForSearch,
}) {
  const [searchEmpty, setSearchEmpty] = useState(false);

  const [value, setValue] = useState(searchString);
  const searchErrorClass = searchEmpty
    ? 'searchForm__error searchForm__error_visible'
    : 'searchForm__error';

  const handleChange = (evt) => {
    setSearchEmpty(false);
    setValue(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!value) {
      setSearchEmpty(true);
      return;
    }
    handleFormSubmit(value);
  };
  const checkboxChange = (evt) => {
    changeCheckbox(evt.target.checked);
  };
  return (
    <section className="searchForm root__content">
      <form className="searchForm__form" noValidate onSubmit={handleSubmit}>
        <div className="searchForm__title">
          <input
            className="searchForm__input"
            type="text"
            placeholder="Фильм"
            onChange={handleChange}
            value={value}
            required
          />
          <button className="searchForm__button" type="submit">
            <img
              src={search}
              alt="Search"
              className="searchForm__button-icon"
            ></img>
          </button>
        </div>
        <span className={searchErrorClass}>Нужно ввести ключевое слово</span>

        <FilterCheckbox
          placeholder={'Короткометражки'}
          handleChange={checkboxChange}
          value={checkboxValue}
        />
      </form>
    </section>
  );
}

export default SearchForm;
