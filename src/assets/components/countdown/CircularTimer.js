import React from 'react';
import styled from 'styled-components';

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
`;


function CircularTimer() {

  return (
    <Wrapper>
    <div className='circulartimer'>
      <small>Stir back and forward 3 times</small>
    </div>
    </Wrapper>
  );
}

export default CircularTimer;
