import React, { useState, useEffect } from 'react';
import randomWords from 'random-words';

const Text = ({ wordInput, startTest }) => {
  const [randomText, setRandomText] = useState();

  useEffect(() => {
    setRandomText(randomWords({
      exactly: 150,
      join: ' ',
      maxLength: 7
    }));
  }, []);

  return (
    <div>
      <div className='text'>{randomText}</div>
      <input
        className='textbox'
        onChange={ startTest }
        value={wordInput}
      />
    </div>
  );
};

export default Text;
