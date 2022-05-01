import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import {useState} from "react";
import ImagePopup from "./ImagePopup";

function App() {

  let [isEditAvatarPopupOpen, setAvatarModalIsOpen] = useState(false);
  let [isEditProfilePopupOpen, setEditProfileModalIsOpen] = useState(false);
  let [isAddPlacePopupOpen, setAddPlaceModalIsOpen] = useState(false);
  let [selectedCard, setSelectedCard] = useState();

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
    <div className="page">
      <div className="container">
        <Header/>
        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick}/>
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
      </div>
    </div>
  );
}

export default App;
