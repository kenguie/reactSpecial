import React, { Component } from 'react';

class Header extends Component {
  render() {
    const hamburger = '\u2630';

    return (
      <div>
        <div id="logo">
          <img src="../../images/logo.jpg" />
        </div>
        <div id="phone">212.555.5555</div>
        <div id="login">LOGIN</div>
        <div id="hamburger">{hamburger}</div>
      </div>
    );
  }
}

export default Header;
