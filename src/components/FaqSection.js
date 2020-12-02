import React from 'react';
import styled from 'styled-components';
import { HomeStyle } from './styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation';

const FaqStyle = styled(HomeStyle)`
  display: block;
    span {
      display: block;
    }
    h2 {
      padding-bottom: 2rem;
      font-weight: lighter; 
    }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .anwser {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <FaqStyle variants={scrollReveal} ref={element} animate={controls} initial="hidden">
      <h2>Any Questions?<span>FAQ</span></h2>
      <AnimateSharedLayout>
        <Toggle title="How do i start?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At iusto cupiditate amet eum eos sed distinctio nisi nam iste, omnis, atque, quod assumenda?
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At iusto cupiditate amet eum eos sed distinctio nisi nam iste, omnis, atque, quod assumenda?
            </p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At iusto cupiditate amet eum eos sed distinctio nisi nam iste, omnis, atque, quod assumenda?
            </p>
          </div>
      </Toggle>
      <Toggle title="What Products do you offer?">
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At iusto cupiditate amet eum eos sed distinctio nisi nam iste, omnis, atque, quod assumenda?
          </p>
        </div>
      </Toggle>
    </AnimateSharedLayout>
  </FaqStyle>
  );
};

export default FaqSection;