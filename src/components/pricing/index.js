import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {
  state = {
    prices: [100, 200, 250],
    seating: ['Balcony', 'Floor', 'VIP'],
    desc: [
      'Comfortable reclining chairs. Best acoustics in the house. For those who just want to enjoy the music',

      'Comfortable reclining chairs with extra standing room. For enthusiastic audience participants who love the up close and personal experience.',

      'Your own private balcony with table service and luxury seats. Surround sound and a 4K 90" direct feed screen. Above the crowd with the intimate view of our talented camera men.'
    ],
    link: ['http://sales/balcony', 'http://sales/floor', 'http://sales/vip'],
    delay: [500, 0, 500]
  };

  showBoxes = () => {
    const { prices, seating, desc, link, delay } = this.state;
    return this.state.prices.map((box, i) => (
      <Zoom key={i} delay={delay[i]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${prices[i]}</span>
              <span>{seating[i]}</span>
            </div>
            <div className="pricing_description">{desc[i]}</div>
            <div className="pricing_buttons">
              <MyButton
                text="Get now"
                bgColor="darkred"
                color="white"
                link={link[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));
  };

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
