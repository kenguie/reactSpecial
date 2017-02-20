import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const copyright = '\u00a9';

    return (
      <div id="footer">
        <span className="copyright">{copyright} 2017 - SPARTA PLAESENT </span>
        <span className="instagram">&nbsp;- <a href="#">INSTAGRAM</a> </span>
        <span className="facebook">&nbsp;- <a href="#">FACEBOOK</a> </span>
        <span className="twitter">&nbsp;- <a href="#">TWITTER</a> </span>
      </div>
    )
  }
}

export default Footer;
