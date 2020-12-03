import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const NavStyle = styled.div`
  min-height: 10vh;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 10rem;
  background-color: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: #fff;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 2.5rem;
    font-family: "Lobster",cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative: 
  }
  @media (max-width: 1300px) {
      flex-direction: column;
      padding: 3rem 1rem;
      #logo {
        display: inline-block;
        margin: 1rem;
      }
      ul {
        padding: 2rem;
        justify-content: space-around;
        width: 100%;
        li {
          padding: 0;
        }
      }
    }
`;
const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  bottom: -80%;
  left: 60%;
`;

const Nav = () => {
  const {pathname} = useLocation();
  return (
    <NavStyle>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
          <Line 
            transition={{ duration: 0.75 }} 
            initial={{ width: '0%' }} 
            animate={{ width: pathname === '/' ? '100%' : '0%' }} 
          />
        </li>
        <li>
          <Link to="/work">Our Work</Link>
          <Line 
            transition={{ duration: 0.75 }} 
            initial={{ width: '0%' }} 
            animate={{ width: pathname === '/work' ? '100%' : '0%' }} 
          />
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
          <Line 
            transition={{ duration: 0.75 }} 
            initial={{ width: '0%' }} 
            animate={{ width: pathname === '/contact' ? '100%' : '0%' }} 
          />
        </li>
      </ul>
    </NavStyle>
  );
};

export default Nav;