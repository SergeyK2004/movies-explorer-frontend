import React from 'react';
import './EmptyResult.css';

function EmptyResult({ message }) {
  return (
    <div className="empty">
      <h2 className="empty__label">{message}</h2>
    </div>
  );
}

export default EmptyResult;
