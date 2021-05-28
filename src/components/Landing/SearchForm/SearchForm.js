import React, { useState } from 'react';
import search from '../../../images/search.png';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({ handleFormSubmit }) {
  const [value, setValue] = useState('');
  const [checkbox, setCheckbox] = useState('');

  const handleChange = (evt) => {
    setValue(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleFormSubmit(value);
  };
  const checkboxChange = (evt) => {
    setCheckbox(evt.target.value);
  };
  return (
    <section className="searchForm root__content">
      <form className="searchForm__form" onSubmit={handleSubmit}>
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

        <FilterCheckbox
          placeholder={'Короткометражки'}
          handleChange={checkboxChange}
          value={checkbox}
        />
      </form>
    </section>
  );
}

export default SearchForm;
