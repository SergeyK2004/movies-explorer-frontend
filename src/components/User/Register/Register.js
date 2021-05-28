import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';

function Register(props) {
  function handleSubmit(name, password, email) {
    props.onRegister(name, password, email);
  }

  return (
    <AuthForm
      title="Добро пожаловать!"
      button="Зарегистрироваться"
      needUnderButton={true}
      onSubmit={handleSubmit}
      isClearInput={props.isClearInput}
      isRegister={true}
    >
      <div className="authForm__signin">
        <p>
          Уже зарегистрированы?
          <Link to="signin" className="authForm__signin-link">
            Войти
          </Link>
        </p>
      </div>
    </AuthForm>
  );
}

export default withRouter(Register);
