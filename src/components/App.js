import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import {useState} from "react";
import ImagePopup from "./ImagePopup";
import React from "react";
import {api} from "../utils/Api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {

  const [isEditAvatarPopupOpen, setAvatarModalIsOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfileModalIsOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlaceModalIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState('User');
  const [cards, setNewCards] = useState([]);

  React.useEffect(() => {
    api.getUserData()
      .then((res) => {
        setCurrentUser(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  React.useEffect(() => {
    api.getInitialCards()
      .then((res) => {
        setNewCards(res)
      })
      .catch((err) => {
        console.log(err)
      })

  }, [])

  const handleEditAvatarClick = () => {
    setAvatarModalIsOpen(true);
  }

  const handleEditProfileClick = () => {
    setEditProfileModalIsOpen(true);
  }

  const handleAddPlaceClick = () => {
    setAddPlaceModalIsOpen(true);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card)
  }

  const handleAddPlaceSubmit = (card) => {
    api.addCard(card)
      .then((newCard) => {
        setNewCards([newCard, ...cards]);
        closeAllPopups();
      })
  }

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
      setNewCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
    });
  }

  const handleCardDelete = (card) => {
    api.deleteCard(card._id)
      .then(() => {
        setNewCards((cards) => cards.filter((c) => c._id !== card._id))
      })
  }

  const closeAllPopups = () => {
    setAvatarModalIsOpen(false);
    setEditProfileModalIsOpen(false);
    setAddPlaceModalIsOpen(false);
    setSelectedCard(null)
  }

  const handleUpdateUser = (data) => {
    api.editProfile(data)
      .then((res) => {
        setCurrentUser(res)
        closeAllPopups()
      })
  }

  function handleUpdateAvatar({avatar}) {
    api.editAvatar(avatar)
      .then((res) => {
        setCurrentUser(res)
        closeAllPopups()
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="container">
          <Header/>
            <Main onEditAvatar={handleEditAvatarClick}
                  onEditProfile={handleEditProfileClick}
                  onAddPlace={handleAddPlaceClick}
                  onCardClick={handleCardClick}
                  onCardLike={handleCardLike}
                  onCardDelete={handleCardDelete}
                  cards={cards}
            />
            <Footer/>
            {/*Popup Edit Profile*/}
            <EditProfilePopup
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser}
            />
            {/*Add card popup*/}
            <AddPlacePopup
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
              onAddCard={handleAddPlaceSubmit}
            />
            <EditAvatarPopup
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              onUpdateAvatar={handleUpdateAvatar}
            />
            {/*Окно фото*/}
            <ImagePopup
              card={selectedCard}
              onClose={closeAllPopups}
              name="open-photo"
            />
            {/*Окно удаления карточки*/}
            <PopupWithForm
              title="Вы уверены?"
              name="delete-card"
              button="Да"
            />
        </div>
      </div>
    </CurrentUserContext.Provider>

  );
}

export default App;
