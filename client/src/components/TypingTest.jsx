import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { VscDebugRestart } from 'react-icons/vsc';
import SubMenu from './SubMenu.jsx';
import Text from './Text.jsx';

let testInterval;
let currentCorrectKeys;
const localhost = 'http://localhost:8080/typo';

const TypingTest = ({ test, showStats, setCurrentSeconds, currentSeconds}) => {
  const [countDown, setCountDown] = useState(currentSeconds);
  const [wordInput, setWordInput] = useState('');
  const [correctKeys, setCorrectKeys] = useState();
  const [start, setStart] = useState(false);

  const startTest = () => {
    if (!start) {
      testInterval = setInterval(() => {
        postData(currentCorrectKeys);
        setCountDown((prevState) => {
          if (prevState === 0) {
            showStats();
            clearInterval(testInterval);
            setStart(false);
            setCountDown(currentSeconds);
            postData(correctKeys);
          }
          currentCorrectKeys = correctKeys;
          return prevState - 1;
        });
      }, 1000);
      setStart(true);
    }
  };


  const postData = (correct) => {
    currentCorrectKeys = correct;
    console.log(correct);
    const wpm = Math.round((correctKeys/5) / (currentSeconds/60));
    console.log(wpm, correct, correctKeys);
    // return axios.post(localhost, data);
  };

  const changeCountDown = (e, seconds) => {
    e ? e.preventDefault() : '';
    clearInterval(testInterval);
    setCountDown(seconds);
    setStart(false);
    setWordInput('');
  };

  useEffect(() => {
    setCurrentSeconds(countDown);
  }, [start]);

  useEffect(() => {
    changeCountDown(null, currentSeconds);
  }, [test]);

  return (
    <div className='typingtest'>
      <SubMenu
        setCurrentSeconds={ setCurrentSeconds }
        setCountDown={ changeCountDown }
        countDown={ countDown }
        showStats={ showStats }
        currentSeconds={ currentSeconds }
      />
      {correctKeys}
      <Text
        currentSeconds={ currentSeconds }
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
