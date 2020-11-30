import React from 'react';
import home1 from '../img/home1.png';
import HomeStyle from './styles';
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';

const AboutSection = () => {
  return(
    <HomeStyle>
      <div className="description">
        <motion.div>
          <div className="hide">
            <motion.h2 variants={titleAnim}>
              We work to make 
            </motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnim}>
              true. 
            </motion.h2>
          </div>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography idears that you have. We have professionals with the skill set you need!
        </motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </div>
      <div className="image">
        <motion.img variants={photoAnim} src={home1} alt="Guy with a camera"/>
      </div>
    </HomeStyle>
  );
};

export default AboutSection;