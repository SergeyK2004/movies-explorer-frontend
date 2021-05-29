import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import './App.css';
import Register from '../User/Register/Register';
import Login from '../User/Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../User/Profile/Profile';
import Error404 from '../Landing/404/Error404';

function App() {
  function onRegister(name, password, email) {
    // register(password, email)
    //   .then(() => {
    //     setIsClearInput(true);
    //     setIsRegSuccess(true);
    //     setIsTooltipPopupOpen(true);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setIsRegSuccess(false);
    //     setIsTooltipPopupOpen(true);
    //   });
    console.log(name, password, email);
  }
  function handleSignin(email) {
    // setLoggedIn(true);
    // setUserEmail(email);
    console.log(email);
  }
  function onLogin(password, email) {
    // autorize(password, email)
    //   .then((res) => {
    //     setIsClearInput(true);
    //     localStorage.setItem('token', res.token);
    //     handleSignin(email);
    //     history.push('/mesto');
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    console.log(password, email);
  }

  function handleFormSubmit(evt) {
    console.log(evt);
  }

  return (
    <div className="App">
      <div className="page">
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/signup">
            <Register onRegister={onRegister} isClearInput={true} />
          </Route>
          <Route path="/signin">
            <Login
              handleSignin={handleSignin}
              onLogin={onLogin}
              isClearInput={true}
            />
          </Route>
          <Route path="/movies">
            <Movies handleFormSubmit={handleFormSubmit}></Movies>
          </Route>
          <Route path="/saved-movies">
            <SavedMovies handleFormSubmit={handleFormSubmit}></SavedMovies>
          </Route>
          <Route path="/profile">
            <Profile
              handleFormSubmit={handleFormSubmit}
              name="Виталий"
            ></Profile>
          </Route>
          <Route path="/">
            <Error404 />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
