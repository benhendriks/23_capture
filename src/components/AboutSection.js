import React from 'react';
import styled from 'styled-components';
import home1 from '../img/home1.png';

const AboutSectionStyle = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  .description {
    flex: 1;
    padding-right: 5rem;
    h2 {
      font-weight: lighter;
    }
  }
  .image {
    flex: 1;
    overflow: hidden;
    img {
      width: 100%;
      height: 80vh;
      object-fit: cover;   
    }
  }
  .hide {
    overflow: hidden;
  }
`;

const AboutSection = () => {
  return(
    <AboutSectionStyle>
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
    </AboutSectionStyle>
  )
}

export default AboutSection;