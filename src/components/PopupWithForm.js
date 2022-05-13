import React from "react";

function PopupWithForm(props) {
    const className = props.isOpen ? 'popup_opened' : '';
    return (
      <div className={`popup ${props.name} ${className}`}>
        <div className="popup__container ">
          <button onClick={props.onClose} type="button" aria-label="Кнопка закрытия окна" className="popup__close-button"/>
          <form onSubmit={props.onSubmit} className="popup__form" name={props.name} noValidate>
            <h2 className="popup__title">{props.title}</h2>
            {props.children}
            <button type="submit" className="popup__button">{props.button}</button>
          </form>
        </div>
      </div>
    )
}

export default PopupWithForm;

/*class PopupWithForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen,
      onClose: this.props.onClose
    }
  }

  render() {
    const className = this.props.isOpen ? 'popup_opened' : '';
    return (
      <div className={`popup ${this.props.name} ${className}`}>
        <div className="popup__container ">
          <button onClick={this.props.onClose} type="button" aria-label="Кнопка закрытия окна" className="popup__close-button"/>
          <form className="popup__form" name={this.props.name} noValidate>
            <h2 className="popup__title">{this.props.title}</h2>
            {this.props.children}
            <button type="submit" className="popup__button">{this.props.button}</button>
          </form>
        </div>
      </div>
    )
  }
}

export default PopupWithForm;*/
