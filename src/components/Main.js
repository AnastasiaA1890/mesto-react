import React, {useState} from "react";
import Card from "./Card";
import {api} from "../utils/Api";

function Main(props) {
  const [userName, setUserName] = React.useState('User');
  const [userDescription, setUserDescription] = React.useState("Developer");
  const [userAvatar, setAvatar] = React.useState();
  let [cardsData, setCardsData] = useState([]);

  React.useEffect(() => {
    api.getInitialCards()
      .then((res) => {
        const card = res.map((cardsData) => {
          return {
            name: cardsData.name,
            link: cardsData.link,
            likes: cardsData.likes.length,
            id: cardsData._id
          }
        })
        setCardsData(card)
      })
      .catch((err) => {
        console.log(err)
      })

  }, [])

  React.useEffect(() => {
    api.getUserData()
      .then((res) => {
        setUserName(res.name)
        setUserDescription(res.about)
        setAvatar(res.avatar)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <main className="content">
      {/*Секция profile*/}
      <section className="profile">
        <div className="profile__info">
          <button onClick={props.onEditAvatar} className="profile__avatar-button">
            <img src={userAvatar}  alt="Аватар пользователя" className="profile__avatar"/>
          </button>
          <div className="profile__fields">
            <h1 className="profile__name">{userName}</h1>
            <button onClick={props.onEditProfile} type="button" aria-label="Кнопка редактирования профиля"
                    className="profile__button"/>
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button onClick={props.onAddPlace} type="button" aria-label="Кнопка добавления карточки"
                className="profile__add-button"/>
      </section>
      {/*Секция elements*/}
      <section className="elements">
        {
          cardsData.map((card) => (
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
