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


function CircularTimer(props) {

  return (
    <Wrapper>
    <div className='circulartimer'>
      <small>{props.description}</small>
    </div>
    </Wrapper>
  );
}

export default CircularTimer;
