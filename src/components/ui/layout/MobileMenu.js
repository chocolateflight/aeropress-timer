import React from 'react';
import styled from 'styled-components';
import RecipeList from '../Menu/RecipeList';
import github from '../../../assets/img/github.png';

/*
Responsibility:
- Displays a Menu on Mobile devices

Description:
- Receives a prop from the Navbar that updates a class
- Class controls that component only shows when opened from navbar
*/

// styled component
const Wrapper = styled.div`
  .mobilemenu {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    position: fixed;
    left: -1000px;
    height: 100%;
    width: 100%;
    padding: 1rem;
    background-color: rgba(211, 215, 217, 0.4);
    backdrop-filter: blur(20px);
    font-size: 1.7rem;
    transition: ease 0.2s all;
  }

  .coffeename {
    color: var(--primary-500);
    display: block;
    text-align: center;
    margin-top: 1rem;
  }

  .coffeename:hover {
    cursor: pointer;
  }

  .coffeename.selected {
    color: var(--green-light);
  }

  .coffeedesc {
    color: var(--primary-500);
    display: none;
  }

  .coffeedesc.selected {
    display: flex;
    flex-direction: column;
    text-align: center;
    color: var(--green-light);
    text-align: left;
  }

  .animate {
    transform: translate3d(1000px, 0, 0);
  }

  .github {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .github a {
    color: var(--white);
    font-size: 0.9rem;
  }

  @media screen and (min-width: 900px) {
    .mobilemenu {
      display: none;
    }
  }
`;

// functions
function MobileMenu(props) {
  return (
    <Wrapper>
      <div className={`mobilemenu ${props.class}`}>
        <RecipeList />
        <div className='github'>
          <img src={github} alt='' />
          <a
            href='https://github.com/chocolateflight'
            target='_blank'
            rel='noopener noreferrer'>
            Visit my GitHub
          </a>
        </div>
      </div>
    </Wrapper>
  );
}

export default MobileMenu;
