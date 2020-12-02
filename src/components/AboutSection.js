import React from 'react';
import home1 from '../img/home1.png';
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from './Wave';
import styled from 'styled-components';
import { HomeStyle, Description, Image } from './styles';

const Hide = styled.div`
  overflow: hidden;
`;

const AboutSection = () => {
  return(
    <HomeStyle>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>
              We work to make 
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              true. 
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography idears that you have. We have professionals with the skill set you need!
        </motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="Guy with a camera"/>
      </Image>
      <Wave />
    </HomeStyle>
  );
};

export default AboutSection;