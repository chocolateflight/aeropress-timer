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
  const [time, setTime] = useState(6);

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
  }, [props.isPause]);

  return (
    <Wrapper>
      <div className='numerictimer'>{`${Math.floor(time / 60)}:${
        time % 60 < 10 ? '0' : ''
      }${time % 60}`}</div>
    </Wrapper>
  );
}

export default NumericTimer;
