import React from "react";

function Card({onCardClick, card}) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    /*Шаблон карточки element*/
    <article className="element">
      <img onClick={handleClick} src={card.link} alt="Фото Парка" className="element__img"/>
      <button className="element__delete-button" type="button" aria-label="Кнопка удаления карточки"/>
      <div className="element__description">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__likes">
          <button type="button" aria-label="Кнопка понравилось" className="element__like-button"/>
          <span className="element__like-counter">{card.likes}</span>
        </div>
      </div>
    </article>
  )
}

export default Card;
