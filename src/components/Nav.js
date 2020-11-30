import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavStyle = styled.nav`
  nav {  
    min-height: 10vh;
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 10rem;
    background-color: #282828;
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
  }
`;

const Nav = () => {
  return (
    <NavStyle>
      <nav>
        <h1>
          <Link id="logo" to="/">Capture</Link>
        </h1>
        <ul>
          <li>
            <Link to="/">About Us</Link>
          </li>
          <li>
            <Link to="/work">Our Work</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </NavStyle>
  );
};

export default Nav;