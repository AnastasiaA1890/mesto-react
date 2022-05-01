import React from "react";
import logo from "../images/logo-light.svg";

class Header extends React.Component{
  render() {
    return (
      <header className="header">
        <a href="#"><img src={logo} alt="Логотип" className="header__logo"/></a>
      </header>
    );
  }
}

export default Header;
