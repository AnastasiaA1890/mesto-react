import React from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Card({onCardClick, card, onCardLike, onCardDelete}) {
  const currentUser = React.useContext(CurrentUserContext);
  //Delete button
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `element__delete-button ${isOwn ? 'element__delete-button_visible' : 'element__delete-button_hidden'}`
  );
  //Likes button
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName =
    `element__like-button ${isLiked ? 'element__like-button_active' : 'element__like-button'}`
  ;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card)
  }

  return (
    /*Element card template*/
    <article className="element">
      <img onClick={handleClick} src={card.link} alt={card.name} className="element__img"/>
      <button onClick={handleDeleteClick} className={cardDeleteButtonClassName} type="button" aria-label="Кнопка удаления карточки"/>
      <div className="element__description">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__likes">
          <button onClick={handleLikeClick} type="button" aria-label="Кнопка понравилось" className={cardLikeButtonClassName}/>
          <span className="element__like-counter">{card.likes.length}</span>
        </div>
      </div>
    </article>
  )
}

export default Card;
