import React, { useState, useEffect } from 'react';
import randomWords from 'random-words';

const Text = () => {

  let randomText = randomWords({exactly: 150, join: ' ', maxLength: 8});

  return (
    <div className='text'>
      {randomText}
    </div>
  );
};

export default Text;
