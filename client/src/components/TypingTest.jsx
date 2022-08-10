import React, { useEffect, useState } from 'react';
import SubMenu from './SubMenu.jsx';
import Text from './Text.jsx';

let testInterval;

const TypingTest = ({ showStats }) => {
  const [countDown, setCountDown] = useState(15);
  const [wordInput, setWordInput] = useState('');


  const startTest = (e) => {
    testInterval = setInterval(() => {
      setCountDown((prevState) => {
        if (prevState === 0) {
          clearInterval(testInterval);
          return showStats();
        }
        return prevState - 1;
      });
    }, 1000);
    setWordInput(e.target.value);
  };

  const changeCountDown = (seconds) => {
    clearInterval(testInterval);
    setCountDown(seconds);
    setWordInput('');
  };

  // useEffect(() => {
  //   changeCountDown((prevState) => prevState);
  // }, [countDown]);

  return (
    <div className='typingtest'>
      <SubMenu
        setCountDown={changeCountDown}
        countDown={ countDown }
        showStats={ showStats }
      />
      <Text/>
      <input onChange={startTest} value={wordInput}></input>
      <div>Restart Button</div>
    </div>
  );
};

export default TypingTest;
