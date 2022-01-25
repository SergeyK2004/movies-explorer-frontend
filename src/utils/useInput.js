import { useState } from 'react';

const useInput = (initial, type) => {
  const [value, setValue] = useState(initial);
  const [error, setError] = useState(null);

  return {
    value,
    onChange: (e) => {
      setValue(e.target.value);
      const isError = !e.target.checkValidity();
      if (isError) {
        if (type === 'name') {
          setError(
            'Поле ИМЯ может содержать только латиницу, кириллицу, пробел или дефис',
          );
        } else {
          setError(e.target.validationMessage);
        }
      } else {
        setError(null);
      }
    },
    error,
  };
};

export default useInput;
