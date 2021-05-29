import React from 'react';
import closeImage from '../../../images/close.png';
import MainMenu from '../MainMenu/MainMenu';
import './Wrapper.css';

function Wrapper({ handleClose }) {
  function closeModal() {
    handleClose();
  }

  return (
    <div className="wrapper">
      <div className="wrapper__popup">
        <button onClick={closeModal} className="wrapper__close" type="button">
          <img alt="close" src={closeImage} />
        </button>
        <MainMenu isWrapper />
      </div>
    </div>
  );
}

export default Wrapper;
