import React, {useState} from 'react';
import styled from 'styled-components';
import { useAppContext } from '../../context/appContext';

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

  span {
    color: var(--primary-500);
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
  const { selectRecipe } = useAppContext();
  const [highlightRecipe, setHighlightRecipe] = useState(1)

  function selectionHandler(e) {
    setHighlightRecipe(+e.target.id);
    selectRecipe(+e.target.id);
    props.stateChanger()
  }


  return (
    <Wrapper>
      <div className={`mobilemenu ${props.class}`}>
        <span
          id='1'
          className={highlightRecipe === 1 ? 'selected' : ''}
          onClick={selectionHandler}
        >
          Recipe 1
        </span>
        <span
          id='2'
          className={highlightRecipe === 2 ? 'selected' : ''}
          onClick={selectionHandler}
        >
          Recipe 2
        </span>
        <span
          id='3'
          className={highlightRecipe === 3 ? 'selected' : ''}
          onClick={selectionHandler}
        >
          Recipe 3
        </span>
      </div>
    </Wrapper>
  );
}

export default MobileMenu;
