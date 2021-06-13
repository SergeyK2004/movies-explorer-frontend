import React from 'react';
import './More.css';

function More({ moreClick }) {
  return (
    <section className="more root__content">
      <button className="more__button" onClick={moreClick}>
        Ещё
      </button>
    </section>
  );
}

export default More;
