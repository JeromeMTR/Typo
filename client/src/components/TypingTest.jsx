import React, { useEffect, useState } from 'react';
import SubMenu from './SubMenu.jsx';
import Text from './Text.jsx';

let testInterval;

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

  const changeCountDown = (seconds) => {
    clearInterval(testInterval);
    setCountDown(seconds);
    setStart(false);
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
      <Text
        wordInput={ wordInput }
      />
      <input
        onChange={ startTest }
        value={ wordInput }
      />
      <div>Restart Button</div>
    </div>
  );
};

export default TypingTest;
