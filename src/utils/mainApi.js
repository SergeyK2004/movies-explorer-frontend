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

  getUserInfo() {
    return fetch(this._baseUrl + 'users/me', {
      headers: this._headers,
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  setUserInfo(item) {
    return fetch(this._baseUrl + 'users/me', {
      headers: this._headers,
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
      headers: this._headers,
    }).then((res) => {
      return this._getResponseData(res);
    });
  }
  delMovie(cardObject) {
    return fetch(this._baseUrl + 'movies/' + cardObject._id, {
      headers: this._headers,
      method: 'DELETE',
    }).then((res) => {
      return this._getResponseData(res);
    });
  }
  setNewMovie(item) {
    return fetch(this._baseUrl + 'movies', {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({
        country: item.country,
        director: item.director,
        duration: item.duration,
        year: item.year,
        description: item.description,
        image: item.image,
        trailer: item.trailer,
        nameRU: item.nameRU,
        nameEN: item.nameEN,
        thumbnail: item.thumbnail,
        movieId: item.movieId,
        owner: item.owner,
      }),
    }).then((res) => {
      return this._getResponseData(res);
    });
  }
}

const mainApi = new MainApi({
  baseUrl: 'https://sergey.nomoredomains.icu/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// authorization:
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI1MzllYjhjMWNjZTU0NzU3MTExYmYiLCJpYXQiOjE2MjI0ODk2MzQsImV4cCI6MTYyMzA5NDQzNH0.I4RpNB_cs7hmSzfSBL1Tw6P50oF1VsZdiiobaFHTn5Y',

export default mainApi;
