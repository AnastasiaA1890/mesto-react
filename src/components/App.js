import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import {useState} from "react";
import ImagePopup from "./ImagePopup";
import React from "react";
import {api} from "../utils/Api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import {NewCardsContext} from "../contexts/NewCardsContext";


function App() {

  const [isEditAvatarPopupOpen, setAvatarModalIsOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfileModalIsOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlaceModalIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState('User');
  const [newCards, setNewCards] = useState([]);

  React.useEffect(() => {
    api.getUserData()
      .then((res) => {
        setCurrentUser(res)
      })
      .catch((err) => {
        console.log(err)
      })
  },[])

  React.useEffect(() => {
      api.getInitialCards()
        .then((res) => {
          const card = res.map((cardsData) => {
            return {
              name: cardsData.name,
              link: cardsData.link,
              likes: cardsData.likes.length,
              id: cardsData._id,
              owner: cardsData.owner._id
            }
          })
          setNewCards(card)
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

  const closeAllPopups = () => {
    setAvatarModalIsOpen(false);
    setEditProfileModalIsOpen(false);
    setAddPlaceModalIsOpen(false);
    setSelectedCard(null)
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="container">
          <Header/>
          <NewCardsContext.Provider value={newCards}>
            <Main onEditAvatar={handleEditAvatarClick}
                  onEditProfile={handleEditProfileClick}
                  onAddPlace={handleAddPlaceClick}
                  onCardClick={handleCardClick}/>
            <Footer/>
            {/*Окно редактировать профиль*/}
            <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} title="Редактировать профиль"
                           name="edit-profile"
                           button="Сохранить" children={(
              <>
                <label className="popup__field">
                  <input type="text" placeholder="Имя" name="name" className="popup__input popup__input_field_name"
                         id="name-input" required minLength="2" maxLength="40"/>
                  <span className="popup__error-visible name-input-error"/>
                </label>
                <label className="popup__field">
                  <input type="text" placeholder="О себе" name="about" className="popup__input popup__input_field_about"
                         id="about-input" required minLength="2" maxLength="200"/>
                  <span className="popup__error-visible about-input-error"/>
                </label>
              </>
            )}
            />
            {/*Окно добавления карточки */}
            <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} title="Новое место" name="add-card"
                           button="Сохранить" children={(
              <>
                <label className="popup__field">
                  <input type="text" placeholder="Название" name="name" className="popup__input popup__input_title"
                         id="card-input" minLength="2" maxLength="30" required/>
                  <span className="popup__error-visible card-input-error"/>
                </label>
                <label className="popup__field">
                  <input type="url" placeholder="Ссылка на картинку" name="link" className="popup__input popup__input_src"
                         id="link-input" required/>
                  <span className="popup__error-visible link-input-error"/>
                </label>
              </>
            )}
            />
            <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} title="Обновить аватар" name="avatar"
                           button="Сохранить"
                           children={(
                             <label className="popup__field">
                               <input type="url" placeholder="Ссылка на картинку" name="avatar"
                                      className="popup__input popup__input_src"
                                      id="avatar-input" required/>
                               <span className="popup__error-visible avatar-input-error"/>
                             </label>
                           )}
            />
            {/*Окно фото*/}
            <ImagePopup card={selectedCard} onClose={closeAllPopups} name="open-photo"/>
            {/*Окно удаления карточки*/}
            <PopupWithForm title="Вы уверены?" name="delete-card" button="Да"/>
          </NewCardsContext.Provider>
        </div>
      </div>
    </CurrentUserContext.Provider>

  );
}

export default App;
