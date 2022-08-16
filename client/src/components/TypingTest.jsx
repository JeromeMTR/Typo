import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { VscDebugRestart } from 'react-icons/vsc';
import SubMenu from './SubMenu.jsx';
import Text from './Text.jsx';

let testInterval;
let currentCorrect;
let wordInputLength;
const localhost = 'http://localhost:8080/typo';

const TypingTest = ({ test, showStats, setCurrentSeconds, currentSeconds }) => {
  const [countDown, setCountDown] = useState(currentSeconds);
  const [wordInput, setWordInput] = useState('');
  const [start, setStart] = useState(false);
  const [correctKeys, setCorrectKeys] = useState();

  const startTest = () => {
    if (!start) {
      testInterval = setInterval(() => {
        setCountDown((prevState) => {
          if (prevState === 0) {
            showStats();
            clearInterval(testInterval);
            setStart(false);
            setCountDown(currentSeconds);
            postData(currentCorrect);
          }
          return prevState - 1;
        });
      }, 1000);
      setStart(true);
    }
  };


  const postData = (correctKeys) => {
    const wpm = Math.round((correctKeys/5) / (currentSeconds/60));
    const accuracy = Math.round((correctKeys / wordInputLength) * 100);

    return axios.post(localhost, {
      wpm: wpm,
      accuracy: accuracy
    });
  };

  const changeCountDown = (e, seconds) => {
    e ? e.preventDefault() : '';
    clearInterval(testInterval);
    setCountDown(seconds);
    setStart(false);
    setWordInput('');
    setCorrectKeys(0);
  };

  useEffect(() => {
    setCurrentSeconds(countDown);
  }, [start]);

  useEffect(() => {
    changeCountDown(null, currentSeconds);
  }, [test]);

  useEffect(() => {
    console.log(correctKeys);
    wordInputLength = wordInput.length;
    currentCorrect = correctKeys;
  }, [countDown]);

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
        currentSeconds={ currentSeconds }
        changeCountDown={ changeCountDown.bind(this) }
        wordInput={ wordInput }
        setWordInput={ setWordInput }
        countDown={ countDown }
        startTest={ startTest }
        correctKeys={ correctKeys }
        setCorrectKeys={ setCorrectKeys }
      />
      <button
        onClick={(e) => changeCountDown(e, currentSeconds)}
      >
        <VscDebugRestart />
      </button>
    </div>
  );
};

TypingTest.propTypes = {
  showStats: PropTypes.func.isRequired,
  setCurrentSeconds: PropTypes.func.isRequired,
  currentSeconds: PropTypes.number.isRequired,
  test: PropTypes.bool.isRequired
};

export default TypingTest;
