export {elements, profilePopupButton, cardPopupButton, profileName, profileDescription, profilePopup, formEditProfile, popupFieldName,
  popupFieldDescription, profilePopupCloseButton, cardPopup, formAdd, popupFieldTitle, cardPopupCloseButton, popupFieldSrc,
  photoPopup, photoPopupImg, photoPopupTitle, photoPopupCloseButton, validationList, avatarPopup, formAvatarEdit, avatarPopupButton}

import yosemiteImg from '../images/yosemite_park.jpg'
import sequoiaImg from '../images/sequoia_park.jpg'
import cannonImg from '../images/cannon_beach.jpg'
import craterImg from '../images/crater_lake.jpg'
import deathImg from '../images/death_valley.jpg'
import mountImg from '../images/mount_hood.jpg'

//Переменные блока Template
const elements = document.querySelector('.elements');
//Переменные секции Profile
const profilePopupButton = document.querySelector('.profile__button');
const cardPopupButton = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
//Переменные PopupEdit Form
const profilePopup = document.querySelector('#edit-profile');
const formEditProfile = document.forms.editProfile;
const popupFieldName = document.querySelector('.popup__input_field_name');
const popupFieldDescription = document.querySelector('.popup__input_field_about');
const profilePopupCloseButton = profilePopup.querySelector('.popup__close-button');
//Переменные PopupAddCard
const cardPopup = document.querySelector('#add-card');
const formAdd = document.forms.addCard;
const popupFieldSrc = formAdd.elements.cardLink;
const popupFieldTitle = formAdd.elements.cardName;
const cardPopupCloseButton = cardPopup.querySelector('#add-card  button.popup__close-button');
//Переменные PopupPhoto
const photoPopup = document.querySelector('#open-photo');
const photoPopupImg = document.querySelector('.popup__img');
const photoPopupTitle = document.querySelector('.popup__photo-title');
const photoPopupCloseButton = photoPopup.querySelector('#open-photo button.popup__close-button')
//Переменный Avatar
const avatarPopup = document.querySelector('#avatar');
const formAvatarEdit = document.forms.avatarEdit;
const avatarPopupButton = document.querySelector('.profile__avatar-button');
//Переменные DeletePopup
const popupDelete = document.querySelector('#delete-card');
const popupDeleteSave = document.forms.deleteCard;
/*
//Массив карточек
const initialCards = [
  {
    name: 'Йосемити Парк',
    link: yosemiteImg
  },
  {
    name: 'Парк Секвойя',
    link: sequoiaImg
  },
  {
    name: 'Пляж Кэннон',
    link: cannonImg
  },
  {
    name: 'Озеро Крейтер',
    link: craterImg
  },
  {
    name: 'Долина смерти',
    link: deathImg
  },
  {
    name: 'Гора Маунт Худ',
    link: mountImg
  }
];*/


const validationList = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
});
