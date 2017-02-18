import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const copyright = '\u00a9';

    return (
      <div id="footer">
        <span className="copyright">{copyright} 2017 - SPARTA PLAESENT </span>
        <span className="instagram">- INSTAGRAM </span>
        <span className="facebook">- FACEBOOK </span>
        <span className="twitter">- TWITTER </span>
      </div>
    )
  }
}

export default Footer;
