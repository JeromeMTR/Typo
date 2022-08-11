import React, { useState, useEffect } from 'react';
import randomWords from 'random-words';

const Text = () => {
  const [randomText, setRandomText] = useState();

  useEffect(() => {
    setRandomText(randomWords({
      exactly: 150,
      join: ' ',
      maxLength: 7
    }));
  }, []);

  return (
    <div className='text'>
      <div>{randomText}</div>
      <input />
    </div>
  );
};

export default Text;
