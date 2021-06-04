import React from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.css';
import logo from '../../../images/logo.svg';

function AuthForm(props) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(password, email, name);
  }
  function handlerOnChangeName(evt) {
    setName(evt.target.value);
  }
  function handlerOnChangeEmail(evt) {
    setEmail(evt.target.value);
  }
  function handlerOnChangePassword(evt) {
    setPassword(evt.target.value);
  }
  React.useEffect(() => {
    if (props.isClearInput) {
      setName('');
      setEmail('');
      setPassword('');
    }
  }, [props.isClearInput]);

  const underButtonText = props.needUnderButton ? props.children : '';

  return (
    <section className="authForm">
      <div className="authForm__top">
        <Link to="/">
          <img className="authForm__logo" src={logo} alt="Logo"></img>
        </Link>
        <h2 className="authForm__title">{props.title}</h2>
      </div>
      <form name="login" className="authForm__form" noValidate>
        {props.isRegister && (
          <label className="authForm__field">
            <p className="authForm__field-name">Имя</p>
            <input
              required
              placeholder="Name"
              className="authForm__input authForm__input_type_name"
              type="text"
              name="name"
              id="name-input"
              autoComplete="username"
              minLength="2"
              maxLength="40"
              value={name || ''}
              onChange={handlerOnChangeName}
            />
            <span
              className="authForm__input-error"
              id="name-input-error"
            ></span>
          </label>
        )}
        <label className="authForm__field">
          <p className="authForm__field-name">E-mail</p>
          <input
            required
            placeholder="Email"
            className="authForm__input authForm__input_type_email"
            type="text"
            name="email"
            id="email-input"
            autoComplete="username"
            minLength="2"
            maxLength="40"
            value={email || ''}
            onChange={handlerOnChangeEmail}
          />
          <span className="authForm__input-error" id="name-input-error"></span>
        </label>
        <label className="authForm__field">
          <p className="authForm__field-name">Пароль</p>
          <input
            required
            placeholder="Пароль"
            className="authForm__input authForm__input_type_password"
            type="password"
            name="password"
            id="password-input"
            autoComplete="current-password"
            minLength="2"
            maxLength="40"
            value={password || ''}
            onChange={handlerOnChangePassword}
          />
          <span
            className="authForm__input-error"
            id="password-input-error"
          ></span>
        </label>
      </form>
      <div className="authForm__bottom">
        {props.button && (
          <button
            className="authForm__button-submit"
            type="submit"
            onClick={handleSubmit}
          >
            {props.button}
          </button>
        )}
        {underButtonText}
      </div>
    </section>
  );
}

export default AuthForm;
