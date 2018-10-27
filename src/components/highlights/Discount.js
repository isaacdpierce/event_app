import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../utils/MyButton';

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  animatePercentage() {
    const { discountStart, discountEnd } = this.state;
    if (discountStart < discountEnd) {
      this.setState({
        discountStart: discountStart + 1
      });
    }
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.animatePercentage();
    }, 30);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.animatePercentage()}>
            <div className="discount_percentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>A sip of wine, a cigarette, And then it’s time to go.</h3>
              <p>
                Now I've heard there was a secret chord That David played, and
                it pleased the Lord But you don't really care for music, do you?
                It goes like this, the fourth, the fifth The minor fall, the
                major lift The baffled king composing Hallelujah
              </p>
              <MyButton
                text="Get TIckets >"
                bgColor="darkred"
                color="#fff"
                link="http://google.com"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
