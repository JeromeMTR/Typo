import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import randomWords from 'random-words';

const Text = ({ wordInput, startTest }) => {
  const [randomText, setRandomText] = useState();

  useEffect(() => {
    setRandomText(randomWords({
      exactly: 150,
      maxLength: 7
    }));
  }, []);

  if (!randomText) return null;

  return (
    <div>
      <div className='text'>
        {randomText.map((word, i) => {
          return <span key={i}>{`${word} `+ ' '}</span>;
        })}
      </div>
      <input
        className='textbox'
        onChange={ startTest }
        value={ wordInput }
      />
    </div>
  );
};

Text.propTypes = {
  startTest: PropTypes.func.isRequired,
  wordInput: PropTypes.string.isRequired
};

export default Text;
