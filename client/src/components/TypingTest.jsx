import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { VscDebugRestart } from 'react-icons/vsc';
import SubMenu from './SubMenu.jsx';
import Text from './Text.jsx';

let testInterval;

const TypingTest = ({ showStats, setCurrentSeconds, currentSeconds}) => {
  const [countDown, setCountDown] = useState(currentSeconds);
  const [wordInput, setWordInput] = useState('');
  const [start, setStart] = useState(false);

  const startTest = (e) => {
    if (!start) {
      testInterval = setInterval(() => {
        setCountDown((prevState) => {
          (async () => {
            if (prevState === 0) {
              await showStats();
              await clearInterval(testInterval);
              await setStart(false);
              await setCountDown(currentSeconds);
            }
          })();
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
    setCurrentSeconds(countDown);
  }, [start]);

  return (
    <div className='typingtest'>
      <SubMenu
        setCurrentSeconds={ setCurrentSeconds }
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

TypingTest.propTypes = {
  showStats: PropTypes.func.isRequired,
  setCurrentSeconds: PropTypes.func.isRequired,
  currentSeconds: PropTypes.number.isRequired
};

export default TypingTest;
