import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../Landing/Header/Header';
import CurrentUserContext from '../../../utils/CurrentUserContext';
import useInput from '../../../utils/useInput';
import './Profile.css';

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const name = useInput(currentUser.name, 'name');
  const email = useInput(currentUser.email, 'email');

  const [buttonClass, setButtonClass] = React.useState('');
  const [submitDisabled, setSubmitDisabled] = React.useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    if (!submitDisabled) {
      props.onSubmit({ name: name.value, email: email.value });
    }
  }

  React.useEffect(() => {
    let newName = '';
    let newEmail = '';

    if (typeof name.target !== 'undefined') {
      newName = name.target.value;
    } else {
      newName = name.value;
    }
    if (typeof email.target !== 'undefined') {
      newEmail = email.target.value;
    } else {
      newEmail = email.value;
    }
    console.log(newName);
    if (
      name.error ||
      email.error ||
      (newName === currentUser.name && newEmail === currentUser.email)
    ) {
      setButtonClass('profile__change profile__change_disabled');
      setSubmitDisabled(true);
    } else {
      setButtonClass('profile__change');
      setSubmitDisabled(false);
    }
  }, [
    name.error,
    email.error,
    currentUser.email,
    currentUser.name,
    email.target,
    name.target,
    email.value,
    name.value,
  ]);

  return (
    <>
      <Header />
      <section className="profile">
        <div className="profile__top">
          <h2 className="profile__title">{`Привет, ${currentUser.name}`}</h2>
        </div>
        <form name="login" className="profile__form" noValidate>
          <label className="profile__field">
            <p className="profile__field-name">Имя</p>
            <input
              {...name}
              pattern="[a-zа-яёA-ZА-ЯЁ][a-zа-яёA-ZА-ЯЁ -]+"
              required
              placeholder="Name"
              className="profile__input profile__input_type_name"
              type="text"
              name="name"
              id="name-input"
              autoComplete="username"
              minLength="2"
              maxLength="40"
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

          <label className="profile__field">
            <p className="profile__field-name">E-mail</p>
            <input
              {...email}
              required
              placeholder="Email"
              className="profile__input profile__input_type_email"
              type="email"
              name="email"
              id="email-input"
              autoComplete="useremail"
              minLength="2"
              maxLength="40"
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
        </form>
        <div className="profile__bottom">
          <p onClick={handleSubmit} className={buttonClass}>
            Редактировать
          </p>
          <p onClick={props.onLogout} className="profile__logout">
            Выйти из аккаунта
          </p>
        </div>
      </section>
    </>
  );
}

export default withRouter(Profile);
