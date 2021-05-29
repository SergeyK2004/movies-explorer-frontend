import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../Landing/Header/Header';
import './Profile.css';

function Profile(props) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(name, password, email);
  }
  function handlerOnChangeName(evt) {
    setName(evt.target.value);
  }
  function handlerOnChangeEmail(evt) {
    setEmail(evt.target.value);
  }
  React.useEffect(() => {
    if (props.isClearInput) {
      setName('');
      setEmail('');
      setPassword('');
    }
  }, [props.isClearInput]);

  return (
    <>
      <Header />
      <section className="profile">
        <div className="profile__top">
          <h2 className="profile__title">{`Привет, ${name}`}</h2>
        </div>
        <form name="login" className="profile__form" noValidate>
          <label className="profile__field">
            <p className="profile__field-name">Имя</p>
            <input
              required
              placeholder="Name"
              className="profile__input profile__input_type_name"
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

          <label className="profile__field">
            <p className="profile__field-name">E-mail</p>
            <input
              required
              placeholder="Email"
              className="profile__input profile__input_type_email"
              type="text"
              name="email"
              id="email-input"
              autoComplete="username"
              minLength="2"
              maxLength="40"
              value={email || ''}
              onChange={handlerOnChangeEmail}
            />
            <span
              className="authForm__input-error"
              id="name-input-error"
            ></span>
          </label>
        </form>
        <div className="profile__bottom">
          <p onClick={handleSubmit} className="profile__change">
            Редактировать
          </p>
          <p className="profile__logout">Выйти из аккаунта</p>
        </div>
      </section>
    </>
  );
}

export default withRouter(Profile);
