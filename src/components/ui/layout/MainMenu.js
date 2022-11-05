import React from 'react';
import styled from 'styled-components';
import RecipeList from '../Menu/RecipeList';
import github from '../../../assets/img/github_lg.png';

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

  .coffeename:hover {
    cursor: pointer;
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
    text-align: left;
  }

  .github {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
  }

  .github img {
    height: 2rem;
  }

  .github a {
    color: var(--white);
    font-size: 0.9rem;
  }

  @media screen and (max-width: 900px) {
    .menu {
      display: none;
    }

    .github {
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
      <div className='github'>
        <img src={github} alt='' />
        <a
          href='https://github.com/chocolateflight'
          target='_blank'
          rel='noopener noreferrer'>
          GitHub
        </a>
      </div>
    </Wrapper>
  );
}

export default MainMenu;
