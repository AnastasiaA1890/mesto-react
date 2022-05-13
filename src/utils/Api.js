class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {headers: this._headers})
      .then(this._checkResponse)
  }

  addCard({name, link, owner: _id}) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
        owner: _id
      })
    })
      .then(this._checkResponse)
  }

  editProfile({name, about}) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name,
        about
      })
    })
      .then(this._checkResponse)
      .catch((err) => {
        console.log(err)
      })
  }

  editAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar
      })
    })
      .then(this._checkResponse)
      .catch((err) => {
        console.log(err)
      })
  }

  getUserData() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

  deleteLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

  addLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

  changeLikeCardStatus(id, isLiked) {
    if(isLiked){
      return this.addLike(id)
    } else {
      return this.deleteLike(id)
    }
  }
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-39',
  headers: {
    authorization: '1dbb1df0-e71b-4917-a03e-8221c4080837',
    'Content-Type': 'application/json'
  }
});
