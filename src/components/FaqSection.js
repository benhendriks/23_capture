import React from 'react';
import styled from 'styled-components';
import HomeStyle from './styles';

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
  return (
    <FaqStyle>
      <div className="faq">
        <h2>Any Questions?<span>FAQ</span></h2>
        <div className="question">
          <h4>How do i start?</h4>
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At iusto cupiditate amet eum eos sed distinctio nisi nam iste, omnis, atque, quod assumenda?
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
        <div className="question">
          <h4>Daily Schedule?</h4>
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At iusto cupiditate amet eum eos sed distinctio nisi nam iste, omnis, atque, quod assumenda?
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
        <div className="question">
          <h4>Different Payment Methods?</h4>
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At iusto cupiditate amet eum eos sed distinctio nisi nam iste, omnis, atque, quod assumenda?
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
        <div className="question">
          <h4>What Products do you offer?</h4>
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At iusto cupiditate amet eum eos sed distinctio nisi nam iste, omnis, atque, quod assumenda?
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
      </div>
    </FaqStyle>
  )
}

export default FaqSection;