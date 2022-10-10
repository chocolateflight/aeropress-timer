import React from 'react';
import styled from 'styled-components';

/*
Responsibility:
- Displays Circular Timer
- Displays Active Step

Description:
- Receives the description props from Timer.js and displays it.
*/

const Wrapper = styled.div`
  .circulartimer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20rem;
    aspect-ratio: 1/1;
    border: 20px solid red;
    border-radius: 50%
  }

  .description {
    width: 80%;
    text-align: center;
  }
`;


function CircularTimer(props) {

  return (
    <Wrapper>
    <div className='circulartimer'>
      <small className='description'>{props.description}</small>
    </div>
    </Wrapper>
  );
}

export default CircularTimer;
