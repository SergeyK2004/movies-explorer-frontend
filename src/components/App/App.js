import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Main from '../Main/Main';
import './App.css';
import Register from '../User/Register/Register';
import Login from '../User/Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../User/Profile/Profile';
import Error404 from '../Landing/404/Error404';
import CurrentUserContext from '../../utils/CurrentUserContext';
import { chekToken, autorize, register } from '../../utils/auth';
import mainApi from '../../utils/mainApi';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isClearInput, setIsClearInput] = React.useState(false);
  const history = useHistory();

  function onRegister(password, email, name) {
    register(name, password, email)
      .then((res) => {
        setIsClearInput(true);
        setLoggedIn(true);
        setCurrentUser({
          _id: res.data._id,
          name: res.data.name,
          email: res.data.email,
        });
        localStorage.setItem('token', res.data.token);
        history.push('/movies');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateUser(item) {
    mainApi
      .setUserInfo(item)
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function onLogin(password, email) {
    autorize(password, email)
      .then((res) => {
        setIsClearInput(true);
        localStorage.setItem('token', res.data);
        chekToken(res.data)
          .then((result) => {
            setLoggedIn(true);
            setCurrentUser(result.data);
            history.push('/movies');
          })
          .catch((err) => {
            return Promise.reject(`Ошибка: ${err.status}`);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function onLogout() {
    localStorage.removeItem('token');
    history.push('/');
    setLoggedIn(false);
  }

  function handleFormSubmit() {}

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      // здесь будем проверять токен
      chekToken(token)
        .then((res) => {
          setLoggedIn(true);
          setCurrentUser(res.data);
          history.push('/movies');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [history]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="page">
          <Switch>
            <Route path="/" exact>
              <Main loggedIn={loggedIn} onLogin={onLogin} />
            </Route>
            <Route path="/signup">
              <Register onRegister={onRegister} isClearInput={isClearInput} />
            </Route>
            <Route path="/signin">
              <Login onLogin={onLogin} isClearInput={isClearInput} />
            </Route>
            <Route path="/movies">
              <Movies handleFormSubmit={handleFormSubmit}></Movies>
            </Route>
            <Route path="/saved-movies">
              <SavedMovies handleFormSubmit={handleFormSubmit}></SavedMovies>
            </Route>
            <Route path="/profile">
              <Profile
                onLogout={onLogout}
                onSubmit={handleUpdateUser}
              ></Profile>
            </Route>
            <Route path="/">
              <Error404 />
            </Route>
          </Switch>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
