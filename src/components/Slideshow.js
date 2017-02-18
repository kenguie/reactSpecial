import React, { Component } from 'react';
import Slick from 'react-slick';

class Slideshow extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <Slick {...settings}>
        <div><img src="../../images/IMG_275117.jpg" /><div>Test Text1</div></div>
        <div><img src="../../images/32707-full.jpg" /><div>Test Text2</div></div>
        <div><img src="../../images/Canadianwolf222.jpg" /><div>Test Text3</div></div>
        <div><img src="../../images/golden eyes.jpg" /><div>Test Text4</div></div>
        <div><img src="../../images/zoe.jpg" /><div>Test Text5</div></div>
      </Slick>
    );
  }
}

export default Slideshow;
