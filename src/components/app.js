import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Slideshow from './Slideshow';
import Mosaic from './Mosaic';
import css from '../../style/style.less';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slideshow />
        <Mosaic />
        <Footer />
      </div>
    );
  }
}
