import React from "react";

function ImagePopup(props) {
  const className = props.card ? 'popup_opened' : '';
  return (
    <div className={`popup ${props.name} ${className}`} >
      <div className="popup__photo-container">
        <button onClick={props.onClose} type="button" aria-label="Кнопка закрытия окна" className="popup__close-button"/>
        <img src={props.card && props.card.link} alt={props.card && props.card.name} className="popup__img"/>
        <p className="popup__photo-title">{props.card && props.card.name}</p>
      </div>
    </div>
  )
}

export default ImagePopup
