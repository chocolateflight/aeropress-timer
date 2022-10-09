import React from 'react';
import styled from 'styled-components';

// styled component
const Wrapper = styled.div`
  .mobilemenu {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    position: fixed;
    left: -800px;
    height: 100%;
    width: 100%;
    padding: 1rem;
    background-color: rgba(211, 215, 217, 0.4);
    backdrop-filter: blur(4px);
    font-size: 2rem;
    transition: ease 0.2s all;
  }

  a {
    color: var(--primary-500);
  }

  .animate {
    transform: translate3d(800px, 0, 0);
  }
`;

// functions
function MobileMenu(props) {
  return (
    <Wrapper>
      <div className={`mobilemenu ${props.class}`}>
        <a href='#'>Recipe 1</a>
        <a href='#'>Recipe 2</a>
        <a href='#'>Recipe 3</a>
      </div>
    </Wrapper>
  );
}

export default MobileMenu;
