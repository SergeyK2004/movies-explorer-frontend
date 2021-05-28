import React from 'react';
import './Error404.css';

function Error404() {
  function back() {
    window.history.back();
  }
  return (
    <section className="error404">
      <div className="error404__main">
        <h2 className="error404__title">404</h2>
        <p className="error404__subtitle">Страница не найдена</p>
      </div>
      <button type="button" onClick={back} className="error404__button">
        Назад
      </button>
    </section>
  );
}

export default Error404;
