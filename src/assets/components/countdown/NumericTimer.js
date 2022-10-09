import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .numerictimer {
    font-size: 2rem;
    font-weight: bold;
  }
`;



function NumericTimer(props) {
  const [time, setTime] = useState(10); // remember to change

  useEffect(() => {
    let interval = null;

    if (props.isPause && time > 0) {
      let time2 = time + 1;
      interval = setInterval(() => {
        time2--;
        if (time2 <= 0) {
          clearInterval(interval);
        } else {
          setTime((prevTime) => prevTime - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  });

  function displayTimer() {
    if (time > 0) {
      return `${Math.floor(time / 60)}:${time % 60 < 10 ? '0' : ''}${time % 60}`;
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
