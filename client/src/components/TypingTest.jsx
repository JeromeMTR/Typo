import React, { useEffect, useState } from 'react';
import { VscDebugRestart } from 'react-icons/vsc';
import SubMenu from './SubMenu.jsx';
import Text from './Text.jsx';

let testInterval;
let currentSeconds = 15;

const TypingTest = ({ showStats }) => {
  const [countDown, setCountDown] = useState(15);
  const [wordInput, setWordInput] = useState('');
  const [start, setStart] = useState(false);

  const startTest = (e) => {
    if (!start) {
      testInterval = setInterval(() => {
        setCountDown((prevState) => {
          if (prevState === 0) {
            clearInterval(testInterval);
            setStart(false);
            return showStats();
          }
          return prevState - 1;
        });
      }, 1000);
      setStart(true);
    }
    setWordInput(e.target.value);
  };

  const changeCountDown = (e, seconds) => {
    e.preventDefault();
    clearInterval(testInterval);
    setCountDown(seconds);
    setStart(false);
    setWordInput('');
  };

  useEffect(() => {
    currentSeconds = countDown;
  }, [start]);

  return (
    <div className='typingtest'>
      <SubMenu
        setCountDown={ changeCountDown }
        countDown={ countDown }
        showStats={ showStats }
        currentSeconds={ currentSeconds }
      />
      <Text
        wordInput={ wordInput }
        startTest={ startTest }
      />

        <VscDebugRestart

        onClick={
           (e) => changeCountDown(e, currentSeconds)
         }
         />
    </div>
  );
};

export default TypingTest;
