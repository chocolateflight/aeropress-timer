import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import MobileMenu from './MobileMenu';
import logo from '../../../img/logo.png';
import hamburger from '../../../img/hamburger-menu-icon.png';

/*
Responsibility:
- Displays a Navbar on Mobile devices
- Sends a prop to MobileMenu.js to indicate whether menu is open or not
*/

// styled component
const Wrapper = styled.nav`
  .mobilenav {
    margin: 0 1rem 1rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
  }

  .mobilenavlogo {
    height: 100%;
  }

  .mobilenavburger {
    height: 80%;
  }

  .mobilenavburger:active {
    transform: scale(0.9);
  }

  @media screen and (min-width: 600px) {
    .mobilenav {
      display: none;
    }
  }
`;

// functions

function MobileNavbar() {
  const [showMenu, setShowMenu] = useState(false);

  function showMenuHandler() {
    setShowMenu(!showMenu);
  }

  return (
    <Wrapper>
      <nav className='mobilenav'>
        <img className='mobilenavlogo' src={logo} alt='logo' />
        <img
          className='mobilenavburger'
          src={hamburger}
          alt='hamburger logo'
          onClick={showMenuHandler}
        />
      </nav>
      <MobileMenu class={showMenu ? 'animate' : ''} stateChanger={showMenuHandler} />
      {/* {showMenu && <MobileMenu/>} */}
    </Wrapper>
  );
}

export default MobileNavbar;
