import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  .numerictimer {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
  }
`;



function NumericTimer(props) {

  function displayTimer() {
    if (props.time > 0) {
      return `${Math.floor(props.time / 60)}:${props.time % 60 < 10 ? '0' : ''}${props.time % 60}`;
    } else {
      return 'Finished!';
    }
  }

  return (
    <Wrapper>
      <div className='numerictimer'>{displayTimer()}</div>
    </Wrapper>
  );
}

export default NumericTimer;
