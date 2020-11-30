import React from 'react';
import home1 from '../img/home1.png';
import HomeStyle from './styles';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return(
    <HomeStyle>
      <div className="description">
        <motion.div>
          <div className="hide">
            <motion.h2>
              We work to make 
            </motion.h2>
          </div>
          <div className="hide">
            <motion.h2>
              your <span>dreams</span> come
            </motion.h2>
          </div>
          <div className="hide">
            <motion.h2>
              true. 
            </motion.h2>
          </div>
        </motion.div>
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