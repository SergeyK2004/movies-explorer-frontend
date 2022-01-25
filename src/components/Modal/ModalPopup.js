import React from 'react';
import Modal from 'react-modal';
import closeImage from '../../images/popup_close.svg';

function ModalPopup({ isOpen, handleClose, title }) {
  Modal.setAppElement(document.getElementById('root'));

  function closeModal() {
    handleClose();
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      closeTimeoutMS={200}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
        content: {
          position: 'absolute',
          top: '30%',
          left: '30%',
          right: '30%',
          bottom: '30%',
          border: '1px solid #ccc',
          background: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '4px',
          outline: 'none',
          padding: '20px',
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        },
      }}
    >
      <button
        onClick={closeModal}
        className="popup__close popup__cancel"
        type="button"
      >
        <img alt="close" src={closeImage} />
      </button>
      <legend className="popup__title">{title}</legend>
    </Modal>
  );
}

export default ModalPopup;
