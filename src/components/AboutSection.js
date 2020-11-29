import React from 'react';
import home1 from '../img/home1.png';
import HomeStyle from './styles';

const AboutSection = () => {
  return(
    <HomeStyle>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>
              We work to make 
            </h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>
              true. 
            </h2>
          </div>
        </div>
        <p>
          Contact us for any photography or videography idears that you have. We have professionals with the skill set you need!
        </p>
        <button>Contact us</button>
      </div>
      <div className="image">
        <img src={home1} alt="Guy with a camera"/>
      </div>
    </HomeStyle>
  );
};

export default AboutSection;