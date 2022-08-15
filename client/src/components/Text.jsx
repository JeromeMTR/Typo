import React, { useState, useEffect, createRef, useRef } from 'react';
import PropTypes from 'prop-types';
import randomWords from 'random-words';

const Text = ({ wordInput, setWordInput, startTest, currentSeconds }) => {
  const [randomText, setRandomText] = useState();

  const start = (value) => {
    startTest();
    setWordInput(value);
  };

  useEffect(() => {
    if (currentSeconds === 15) {
      setRandomText(randomWords({
        exactly: 47,
        maxLength: 7,
      }));
    }
    else if (currentSeconds === 30) {
      setRandomText(randomWords({
        exactly: 100,
        maxLength: 7,
      }));
    }
    else if (currentSeconds === 60) {
      setRandomText(randomWords({
        exactly: 150,
        maxLength: 7,
      }));
    }
  }, [currentSeconds]);


  if (!randomText) return null;

  return (
    <div>
      <p className='text'>
        {randomText.map((word, i) => {
          return <span key={i}>
            {word.split('').map((char, j) => {
              let textColor;
              if (j < wordInput.length) {
                textColor = word[j] === wordInput[j] ? '#45bbff' : '#da0037';
              }

              return <span key={j} style={{color: textColor}}>{char}</span>;
            })} </span>;
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
  wordInput: PropTypes.string.isRequired,
  currentSeconds: PropTypes.number.isRequired
};

export default Text;
