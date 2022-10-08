import React from 'react';
import styled from 'styled-components';

// styled component
const Wrapper = styled.div`
  .mobilemenu {
    background-color: rgba(211, 215, 217, 0.4);
    backdrop-filter: blur(4px);
    height: 100%;
    width: 100%;
    position: fixed;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2rem;
    gap: 2rem;
  }
`;

// functions
function MobileMenu() {
  return (
    <Wrapper>
      <div className='mobilemenu'>
        <a href='#'>Recipe 1</a>
        <a href='#'>Recipe 2</a>
        <a href='#'>Recipe 3</a>
      </div>
    </Wrapper>
  );
}

export default MobileMenu;
