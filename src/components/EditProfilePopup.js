import PopupWithForm from "./PopupWithForm";
import React, {useState, useEffect, useContext} from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const userContext = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setName(userContext.name || '');
    setDescription(userContext.about || '');
  }, [userContext], props.isOpen);

  function handleChangeName(e) {
    setName(e.target.value)
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return(
    <PopupWithForm onSubmit={handleSubmit}
                   isOpen={props.isOpen}
                   onClose={props.onClose}
                   title="Редактировать профиль"
                   name="edit-profile"
                   button="Сохранить"
                   children={(
      <>
        <label className="popup__field">
          <input value={name} onChange={handleChangeName} type="text" placeholder="Имя" name="name" className="popup__input popup__input_field_name"
                 id="name-input" required minLength="2" maxLength="40"/>
          <span className="popup__error-visible name-input-error"/>
        </label>
        <label className="popup__field">
          <input value={description} onChange={handleChangeDescription} type="text" placeholder="О себе" name="about" className="popup__input popup__input_field_about"
                 id="about-input" required minLength="2" maxLength="200"/>
          <span className="popup__error-visible about-input-error"/>
        </label>
      </>
    )}
    />
  )
}

export default EditProfilePopup;
