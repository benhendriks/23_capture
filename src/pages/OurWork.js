import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';


const WorkStyle = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
    .movie {
      padding-bottom: 10rem;
      .line {
        height: 0.5rem;
        background: #fff;
        margin-bottom: 3rem;
      }
    img {
      width: 100%;
      height: 70vh;
      object-fit: cover;
    }
    }
`;

const OurWork = () => {
  return (
    <WorkStyle>
      <div className="movie">
        <h2>Athlete</h2>
        <div className="line"></div>
        <Link>
          <img src={athlete} alt="athlete"/>
        </Link>
      </div>
      <div className="movie">
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link>
          <img src={theracer} alt="theracer"/>
        </Link>
      </div>
      <div className="movie">
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link>
          <img src={goodtimes} alt="goodtimes"/>
        </Link>
      </div>
    </WorkStyle>
  );
};

export default OurWork;