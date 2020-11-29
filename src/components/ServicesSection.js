import React from 'react';
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
import HomeStyle from './styles';
import styled from 'styled-components';

const ServiceStyle = styled(HomeStyle)`
  .cards {
    display: flex;
    flex-wrap: wrap;
    .card {
      .icon {
        display: flex;
        align-items: center;
        h3 {
          margin-left: 1rem;
          background: white;
          color: black;
          padding: 1rem; 
        }
      }
    }
  }
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const ServicesSection = () => {
  return (
    <ServiceStyle>
      <div className="description">
        <h2>High <span>quality</span> services</h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="clock"/>
              <h3>Efficient</h3>
            </div>
              <p>Lorem, ipsum dolor sit amet elit. </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="diaphragm"/>
              <h3>Diaphragm</h3>
            </div>
              <p>Lorem, ipsum dolor sit amet elit. </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="money"/>
              <h3>Affordable</h3>
            </div>
              <p>Lorem, ipsum dolor sit amet elit. </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="teamwork"/>
              <h3>Teamwork</h3>
            </div>
              <p>Lorem, ipsum dolor sit amet elit. </p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="Camera"/>
      </div>
    </ServiceStyle>
  );
};

export default ServicesSection;