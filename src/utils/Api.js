class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  handleAvatar(data) {
    return fetch(this._url + `/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then(this._checkResponse);
  }

  getUserInfo() {
    return fetch(this._url + "/users/me", {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  handleUserInfoApi(data) {
    return fetch(this._url + "/users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.userName,
        about: data.job,
      }),
    }).then(this._checkResponse);
  }

  getInitialCards() {
    return fetch(this._url + "/cards", {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  handleAddCard(data) {
    return fetch(this._url + "/cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this._checkResponse);
  }

  getInformation() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()]);
  }

  deleteCard(id) {
    return fetch(this._url + `/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  likeCard(id) {
    return fetch(this._url + `/cards/likes/${id}`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  disLikeCard(id) {
    return fetch(this._url + `/cards/likes/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }
}

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-41",
  headers: {
    authorization: "240299ab-5d52-47c4-861f-e301564a80f2",
    "Content-Type": "application/json",
  },
});

export default api;
