class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }
  _createHeader() {
    let token = '';
    if (localStorage.getItem('token')) {
      token = localStorage.getItem('token');
    }
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
  }
  getUserInfo() {
    return fetch(this._baseUrl + 'users/me', {
      headers: this._headers,
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  setUserInfo(item) {
    return fetch(this._baseUrl + 'users/me', {
      headers: this._createHeader(),
      method: 'PATCH',
      body: JSON.stringify({
        name: item.name,
        email: item.email,
      }),
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  getMovies() {
    return fetch(this._baseUrl + 'movies', {
      headers: this._createHeader(),
    }).then((res) => {
      return this._getResponseData(res);
    });
  }
  delMovie(cardId) {
    return fetch(this._baseUrl + 'movies/' + cardId, {
      headers: this._createHeader(),
      method: 'DELETE',
    }).then((res) => {
      return this._getResponseData(res);
    });
  }
  setNewMovie(item) {
    return fetch(this._baseUrl + 'movies', {
      headers: this._createHeader(),
      method: 'POST',
      body: JSON.stringify({
        country: item.country,
        director: item.director,
        duration: item.duration,
        year: item.year,
        description: item.description,
        image: 'https://api.nomoreparties.co' + item.image.url,
        trailer: item.trailerLink,
        nameRU: item.nameRU,
        nameEN: item.nameEN,
        thumbnail:
          'https://api.nomoreparties.co' + item.image.formats.thumbnail.url,
        movieId: item.id,
      }),
    }).then((res) => {
      return this._getResponseData(res);
    });
  }
}

const mainApi = new MainApi({
  baseUrl: 'https://sergey.nomoredomains.icu/',
});

export default mainApi;
