import React from 'react';
import styled from 'styled-components';
import RecipeList from '../Menu/RecipeList';

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
    font-size: 1.7rem;
    transition: ease 0.2s all;
  }

  span {
    color: var(--primary-500);
    display: block;
    text-align: center;
  }

  .animate {
    transform: translate3d(800px, 0, 0);
  }

  .selected {
    color: var(--green-light);
  }
`;

// functions
function MobileMenu(props) {

  return (
    <Wrapper>
      <div className={`mobilemenu ${props.class}`}>
        <RecipeList/>
      </div>
    </Wrapper>
  );
}

export default MobileMenu;
