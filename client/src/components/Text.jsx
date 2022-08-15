import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import randomWords from 'random-words';

const Text = ({ wordInput, setWordInput, startTest, currentSeconds, setCorrectKeys }) => {
  const [randomText, setRandomText] = useState();
  const [match, setMatch] = useState();

  const start = (value) => {
    startTest();
    getCorrectSymbols(wordInput);
    setWordInput(value);
  };

  const getCorrectSymbols = (wordInput) => {
    console.log(wordInput);
    if (wordInput.length < 1) return;
    let correct = 0;
    for (let i = 0; i < wordInput.length; i++) {
      if (wordInput[i] === randomText[i]) {
        correct++;
      }
    }
    console.log(correct);
    setCorrectKeys(correct);
  };

  useEffect(() => {
    if (currentSeconds === 15) {
      setRandomText(randomWords({
        exactly: 40,
        maxLength: 7,
        join: ' '
      }));
    }
    else if (currentSeconds === 30) {
      setRandomText(randomWords({
        exactly: 80,
        maxLength: 7,
        join: ' '
      }));
    }
    else if (currentSeconds === 60) {
      setRandomText(randomWords({
        exactly: 120,
        maxLength: 7,
        join: ' '
      }));
    }
  }, [currentSeconds]);

  useEffect(() => {
    console.log(wordInput)
  }, [wordInput]);

  if (!randomText) return null;

  return (
    <div>
      <p className='text'>
        {randomText.split('').map((char, i) => {
          let textColor;

          if (wordInput.length > i) {
            textColor = wordInput[i] === char ? 'green' : 'red';
          }
          return <span key={i} style={{color: textColor}}>{char}</span>;
        })}
      </p>
      <input
        className='textbox'
        onChange={(e) => start(e.target.value)}
        value={ wordInput }
      />
    </div>
  );
};

Text.propTypes = {
  startTest: PropTypes.func.isRequired,
  setWordInput: PropTypes.func.isRequired,
  setCorrectKeys: PropTypes.func.isRequired,
  wordInput: PropTypes.string.isRequired,
  currentSeconds: PropTypes.number.isRequired
};

export default Text;
