import React, { Component } from 'react';

class Pricing extends Component {
  state = {
    prices: [100, 200, 250],
    seating: ['Balcony', 'Floor', 'VIP'],
    desc: {
      balcony:
        'Comfortable reclining chairs. Best acoustics in the house. For those who just want to enjoy the music',
      floor:
        'Comfortable reclining chairs with extra standing room. For enthusiastic audience participants who love the up close and personal experience.',
      vip:
        'A private balcony with luxury seating. Table service. Surround sound and 4K 90 inch direct feed screen. Be above the crowd with the intimate view of our talented camera men.'
    },
    link: ['http://sales/balcony', 'http://sales/floor', 'http://sales/vip']
  };

  showBoxes = () => <div>Hello</div>;

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
