import React from 'react';
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
          <a id="logo" href="#">Capture</a>
        </h1>
        <ul>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Our Work</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    </NavStyle>
  )
}

export default Nav;