import React from 'react';
import styled from 'styled-components';
import RecipeList from '../Menu/RecipeList';

const Wrapper = styled.div`
  .menu {
    text-align: left;
  }

  .coffeename {
      color: var(--primary-700);
      display: block;
      text-align: left;
      margin-top: 1rem;
      font-size: 2rem;
      font-style: bold;
    }

    .coffeename.selected {
      color: var(--textColor);
    }

    .coffeedesc {
      display: none;
      font-size: 1.2rem;
      
    }

    .coffeedesc.selected {
      display: flex;
      flex-direction: column;
      text-align: center;
      color: var(--textColor);
      text-align: left
    }

  @media screen and (max-width: 900px) {
    .menu {
      display: none;
    }
  }
`;

function MainMenu() {
  return (
    <Wrapper>
      <div className='menu'>
        <RecipeList />
      </div>
    </Wrapper>
  );
}

export default MainMenu;
