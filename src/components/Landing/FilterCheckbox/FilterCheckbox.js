import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ placeholder, handleChange, value }) {
  return (
    <div className="checkbox">
      <input
        className="checkbox__input"
        type="checkbox"
        id="check"
        placeholder={placeholder}
        onChange={handleChange}
        checked={value}
        required
      ></input>

      <label className="checkbox__btn" htmlFor="check"></label>
      <p className="checkbox__name">{placeholder}</p>
    </div>
  );
}

export default FilterCheckbox;
