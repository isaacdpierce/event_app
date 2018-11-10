import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        title="Pearly Gates Ampitheater"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127780.86732641782!2d-6.36272805156691!3d53.332776157077774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e80ea27ac2f%3A0xa00c7a9973171a0!2sDublin%2C+Ireland!5e0!3m2!1sen!2sca!4v1541819559847"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      />
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
