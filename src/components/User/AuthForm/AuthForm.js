import React from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.css';
import logo from '../../../images/logo.svg';
import useInput from '../../../utils/useInput';

function AuthForm(props) {
  const name = useInput('', 'name');
  const email = useInput('', 'email');
  const password = useInput('', 'text');

  const [buttonClass, setButtonClass] = React.useState('');
  const [submitDisabled, setSubmitDisabled] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit({
      password: password.value,
      email: email.value,
      name: name.value,
    });
  }

  React.useEffect(() => {
    if (name.error || email.error || password.error) {
      setButtonClass(
        'authForm__button-submit authForm__button-submit_disabled',
      );
      setSubmitDisabled(true);
    } else {
      setButtonClass('authForm__button-submit');
      setSubmitDisabled(false);
    }
  }, [name.error, email.error, password.error]);

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
              {...name}
              pattern="[a-zа-яёA-ZА-ЯЁ][a-zа-яёA-ZА-ЯЁ -]+"
              minLength="2"
              maxLength="40"
              required
              autoComplete="username"
              placeholder="Name"
              className="authForm__input authForm__input_type_name"
              type="text"
            />
            <span
              className={
                name.error
                  ? 'authForm__input-error'
                  : 'authForm__input-error authForm__input-noerror'
              }
              id="name-input-error"
            >
              {name.error}
            </span>
          </label>
        )}
        <label className="authForm__field">
          <p className="authForm__field-name">E-mail</p>
          <input
            {...email}
            required
            placeholder="Email"
            className="authForm__input authForm__input_type_email"
            type="email"
            name="email"
            id="email-input"
            autoComplete="useremail"
          />
          <span
            className={
              email.error
                ? 'authForm__input-error'
                : 'authForm__input-error authForm__input-noerror'
            }
            id="name-input-error"
          >
            {email.error}
          </span>
        </label>
        <label className="authForm__field">
          <p className="authForm__field-name">Пароль</p>
          <input
            {...password}
            required
            placeholder="Пароль"
            className="authForm__input authForm__input_type_password"
            type="password"
            name="password"
            id="password-input"
            autoComplete="current-password"
            minLength="8"
            maxLength="40"
          />
          <span
            className={
              password.error
                ? 'authForm__input-error'
                : 'authForm__input-error authForm__input-noerror'
            }
            id="name-input-error"
          >
            {password.error}
          </span>
        </label>
      </form>
      <div className="authForm__bottom">
        {props.button && (
          <button
            className={buttonClass}
            type="submit"
            onClick={handleSubmit}
            disabled={submitDisabled}
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
