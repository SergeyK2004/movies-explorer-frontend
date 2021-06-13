import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';

function Login(props) {
  function handleSubmit(password, email) {
    props.onLogin(password, email);
  }

  return (
    <AuthForm
      title="Рады видеть!"
      button="Войти"
      needUnderButton={true}
      onSubmit={handleSubmit}
      isClearInput={props.isClearInput}
      isRegister={false}
    >
      <div className="authForm__signin">
        <p>
          Еще не зарегистрированы?
          <Link to="signup" className="authForm__signin-link">
            Регистрация
          </Link>
        </p>
      </div>
    </AuthForm>
  );
}

export default withRouter(Login);
