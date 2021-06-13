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
import moviesApi from '../../utils/moviesApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import ModalPopup from '../Modal/ModalPopup';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isClearInput, setIsClearInput] = React.useState(false);
  const history = useHistory();
  const [moviesArray, setMoviesArray] = useState([]); // массив с фильмами с сервера
  const [usersMoviesArray, setUsersMoviesArray] = useState([]); // массив с фильмами пользователей
  const [isUploadData, setIsUploadData] = useState(false); // идет обмен данными с серверами
  const [activPage, setActivPage] = useState('video'); // Определяем страницу с фильмами, из базы или пользовательские
  const [showMoviesArray, setShowMoviesArray] = useState([]);
  const [usersShowMoviesArray, setUsersShowMoviesArray] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [usersSearchString, setUsersSearchString] = useState('');
  const [usersCheckboxValue, setUsersCheckboxValue] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [modalText, setModalText] = React.useState('');

  function onRegister({ password, email, name }) {
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
        setModalText(err);
        setModalIsOpen(true);
      });
  }

  function handleUpdateUser(item) {
    mainApi
      .setUserInfo(item)
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo.data);
        setModalText('Данные пользователя успешно обновлены');
        setModalIsOpen(true);
      })
      .catch((err) => {
        setModalText(err);
        setModalIsOpen(true);
      });
  }

  function onLogin({ password, email }) {
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
        setModalText(err);
        setModalIsOpen(true);
      });
  }

  function getData() {
    setIsUploadData(true);
    return Promise.all([moviesApi.getMovies(), mainApi.getMovies()])
      .then(([movies, usersMovies]) => {
        setUsersMoviesArray(usersMovies.data);
        movies.forEach((element) => {
          element.like = usersMovies.data.some((item) => {
            return item.movieId === element.id;
          });
        });
        setMoviesArray(movies);
        localStorage.setItem('moviesArray', JSON.stringify(movies));
        localStorage.setItem(
          'usersMoviesArray',
          JSON.stringify(usersMovies.data),
        );
        setIsUploadData(true);
        return [movies, usersMovies];
      })
      .catch((err) => {
        setIsUploadData(false);
        return Promise.reject(`Ошибка: ${err}`);
      })
      .finally(() => setIsUploadData(false));
  }

  function onLogout() {
    localStorage.clear();
    history.push('/');
    setLoggedIn(false);
    setCurrentUser({});
  }

  function setMeaning({ searchValue, movArr, whatsPage }) {
    if (whatsPage === 'video') {
      setSearchString(searchValue);
      setShowMoviesArray(movArr);
      localStorage.setItem('searchStringStorage', searchValue);
      localStorage.setItem('showMoviesArray', JSON.stringify(movArr));
    } else {
      setUsersSearchString(searchValue);
      setUsersShowMoviesArray(movArr);
      localStorage.setItem('searchUsersStringStorage', searchValue);
      localStorage.setItem('usersShowMoviesArray', JSON.stringify(movArr));
    }
  }

  function renewView(whatsPage) {
    if (
      localStorage.getItem(
        whatsPage === 'video' ? 'moviesArray' : 'usersMoviesArray',
      ) &&
      localStorage.getItem(
        whatsPage === 'video'
          ? 'searchStringStorage'
          : 'searchUsersStringStorage',
      )
    ) {
      const arrayForShow = JSON.parse(
        localStorage.getItem(
          whatsPage === 'video' ? 'moviesArray' : 'usersMoviesArray',
        ),
      );
      const searchValue = localStorage.getItem(
        whatsPage === 'video'
          ? 'searchStringStorage'
          : 'searchUsersStringStorage',
      );
      const movArr = arrayForShow.filter(function (item) {
        return item.nameRU.indexOf(searchValue) > -1 && item.image;
      });
      setMeaning({ searchValue, movArr, whatsPage });
    } else {
      setModalText('Что-то не так при обновлении отображения фильмов');
      setModalIsOpen(true);
    }
  }

  function handleSearchFormSubmit(searchValue) {
    let movArr = [];
    if (
      localStorage.getItem(
        activPage === 'video' ? 'moviesArray' : 'usersMoviesArray',
      )
    ) {
      localStorage.setItem(
        activPage === 'video'
          ? 'searchStringStorage'
          : 'searchUsersStringStorage',
        searchValue,
      );

      renewView(activPage);
    } else {
      getData()
        .then(([movies, usersMovies]) => {
          console.log(activPage);
          if (activPage === 'video') {
            movArr = movies.filter(function (item) {
              return item.nameRU.indexOf(searchValue) > -1 && item.image;
            });
          } else {
            movArr = usersMovies.filter(function (item) {
              return item.nameRU.indexOf(searchValue) > -1 && item.image;
            });
          }
          console.log(searchValue, movArr, activPage);
          setMeaning({ searchValue, movArr, whatsPage: activPage });
          setHasError(false);
        })
        .catch((err) => {
          setHasError(true);
          setModalText(err);
          setModalIsOpen(true);
        });
    }
  }
  function changeCheckbox(value) {
    if (activPage === 'video') {
      setCheckboxValue(value);
      localStorage.setItem('checkboxValueStorage', value);
    } else {
      setUsersCheckboxValue(value);
      localStorage.setItem('usersCheckboxValueStorage', value);
    }
  }

  function handleLikeClick({ card, saved }) {
    if (!saved && !card.like) {
      // Добавляем фильм в базу пользователя
      return mainApi
        .setNewMovie(card)
        .then((res) => {
          usersMoviesArray.push(res.data);
          localStorage.setItem(
            'usersMoviesArray',
            JSON.stringify(usersMoviesArray),
          );
          card.like = true;
          moviesArray.find(function (item) {
            return item.id === card.id;
          }).like = true;
          localStorage.setItem('moviesArray', JSON.stringify(moviesArray));
          renewView('usersVideo');
          renewView('video');
        })
        .catch((err) => {
          setModalText(err);
          setModalIsOpen(true);
        });
    } else {
      // Удаляем фильм из базы пользователя и убираем лайк
      const indexOfCard = usersMoviesArray.findIndex(function (el) {
        return el.movieId === (saved ? card.movieId : card.id);
      });

      return mainApi
        .delMovie(usersMoviesArray[indexOfCard]._id)
        .then((res) => {
          usersMoviesArray.splice(indexOfCard, 1);

          const cardOfMoviesArray = moviesArray.find(function (el) {
            return el.id === (saved ? card.movieId : card.id);
          });
          cardOfMoviesArray.like = false;

          localStorage.setItem('moviesArray', JSON.stringify(moviesArray));
          localStorage.setItem(
            'usersMoviesArray',
            JSON.stringify(usersMoviesArray),
          );
          if (saved) {
            renewView('video');
            renewView('usersVideo');
          } else {
            card.like = false;
            renewView('usersVideo');
          }
        })
        .catch((err) => {
          setModalText(err);
          setModalIsOpen(true);
        });
    }
  }
  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      // здесь будем проверять токен
      chekToken(token)
        .then((res) => {
          setActivPage('video');
          setLoggedIn(true);
          setCurrentUser(res.data);
          if (localStorage.getItem('searchStringStorage')) {
            setSearchString(localStorage.getItem('searchStringStorage'));
          }
          if (localStorage.getItem('showMoviesArray')) {
            setShowMoviesArray(
              JSON.parse(localStorage.getItem('showMoviesArray')),
            );
          }
          if (localStorage.getItem('checkboxValueStorage')) {
            setCheckboxValue(
              localStorage.getItem('checkboxValueStorage') === 'true',
            );
          }
          if (localStorage.getItem('searchUsersStringStorage')) {
            setUsersSearchString(
              localStorage.getItem('searchUsersStringStorage'),
            );
          }
          if (localStorage.getItem('usersShowMoviesArray')) {
            setUsersShowMoviesArray(
              JSON.parse(localStorage.getItem('usersShowMoviesArray')),
            );
          }
          if (localStorage.getItem('checkboxUsersValueStorage')) {
            setUsersCheckboxValue(
              localStorage.getItem('checkboxUsersValueStorage') === 'true',
            );
          }
          if (localStorage.getItem('usersMoviesArray')) {
            setUsersMoviesArray(
              JSON.parse(localStorage.getItem('usersMoviesArray')),
            );
          }
          if (localStorage.getItem('moviesArray')) {
            setMoviesArray(JSON.parse(localStorage.getItem('moviesArray')));
          }
          history.push('/movies');
        })
        .catch((err) => {
          localStorage.clear();
          setModalText(err);
          setModalIsOpen(true);
        });
    }
  }, []);
  function handleModalClose() {
    setModalIsOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
        <ProtectedRoute path="/movies" loggedIn={loggedIn}>
          <Movies
            handleSearchFormSubmit={handleSearchFormSubmit}
            changeCheckbox={changeCheckbox}
            searchString={searchString}
            checkboxValue={checkboxValue}
            isUploadData={isUploadData}
            showMoviesArray={showMoviesArray}
            hasError={hasError}
            setActivPage={setActivPage}
            handleLikeClick={handleLikeClick}
          />
        </ProtectedRoute>
        <ProtectedRoute path="/saved-movies" loggedIn={loggedIn}>
          <SavedMovies
            handleSearchFormSubmit={handleSearchFormSubmit}
            changeCheckbox={changeCheckbox}
            searchString={usersSearchString}
            checkboxValue={usersCheckboxValue}
            isUploadData={isUploadData}
            showMoviesArray={usersShowMoviesArray}
            hasError={hasError}
            setActivPage={setActivPage}
            handleLikeClick={handleLikeClick}
          ></SavedMovies>
        </ProtectedRoute>
        <ProtectedRoute path="/profile" loggedIn={loggedIn}>
          <Profile onLogout={onLogout} onSubmit={handleUpdateUser} />
        </ProtectedRoute>
        <Route path="/">
          <Error404 />
        </Route>
      </Switch>
      <ModalPopup
        isOpen={modalIsOpen}
        handleClose={handleModalClose}
        title={modalText}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
