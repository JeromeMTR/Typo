import React, { useState, useEffect } from 'react';
import randomWords from 'random-words';

const Text = () => {

  const [randomText, setRandomText] = useState(randomWords({
    exactly: 150,
    join: ' ',
    maxLength: 7
  }));



  return (
    <div className='text'>
      {randomText}
    </div>
  );
};

export default Text;
