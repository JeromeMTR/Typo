import React, { useState, useEffect } from 'react';
import { ImStatsBars } from 'react-icons/im';

const Panel = ({ showStats, countDown }) => {

  return (
    <div className='panel-container'>
      <span className='countdown-timer'>{ countDown }</span>
      <ImStatsBars
        className='stats-toggle'
        onClick={ showStats }
      />
    </div>
  );
};

export default Panel;
