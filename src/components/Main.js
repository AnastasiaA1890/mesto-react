import React, {useState} from "react";
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import {NewCardsContext} from "../contexts/NewCardsContext";

function Main(props) {
  const userContext = React.useContext(CurrentUserContext);
  const cardsContext = React.useContext(NewCardsContext);

  return (
    <main className="content">
      {/*Секция profile*/}
      <section className="profile">
        <div className="profile__info">
          <button onClick={props.onEditAvatar} className="profile__avatar-button">
            <img src={userContext.avatar} alt="Аватар пользователя" className="profile__avatar"/>
          </button>
          <div className="profile__fields">
            <h1 className="profile__name">{userContext.name}</h1>
            <button onClick={props.onEditProfile} type="button" aria-label="Кнопка редактирования профиля"
                    className="profile__button"/>
            <p className="profile__description">{userContext.about}</p>
          </div>
        </div>
        <button onClick={props.onAddPlace} type="button" aria-label="Кнопка добавления карточки"
                className="profile__add-button"/>
      </section>
      {/*Секция elements*/}
      <section className="elements">
        {
          cardsContext.map((card) => (
            <Card card={card} key={card.id} onCardClick={props.onCardClick}/>
          ))
        }
      </section>
    </main>
  );
}

export default Main

/*class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onEditAvatar: this.props.onEditAvatar,
      onEditProfile: this.props.onEditProfile,
      onAddPlace: this.props.onEditAvatar,
      userName: this.userName,
      userDescription: this.userDescription,
      userAvatar: this.userAvatar
    }
  }

  render() {
    return (
      <main className="content">
        {/!*Секция profile *!/}
        <section className="profile">
          <div className="profile__info">
            <button onClick={this.props.onEditAvatar} className="profile__avatar-button">
              <img style={{ backgroundImage: `url(${this.userAvatar})` }}  alt="Аватар пользователя" className="profile__avatar"/>
            </button>
            <div className="profile__fields">
              <h1 className="profile__name">Hello</h1>
              <button onClick={this.props.onEditProfile} type="button" aria-label="Кнопка редактирования профиля"
                      className="profile__button"/>
              <p className="profile__description"/>
            </div>
          </div>
          <button onClick={this.props.onAddPlace} type="button" aria-label="Кнопка добавления карточки"
                  className="profile__add-button"/>
        </section>
        {/!*Секция elements*!/}
        <section className="elements">
        </section>
      </main>
    );
  }
}

export default Main;*/
