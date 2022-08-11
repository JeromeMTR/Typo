import React from 'react';
import { BsKeyboard } from 'react-icons/bs';
import MainStats from './MainStats.jsx';
import SubStats from './subStats.jsx';

const Stats = ({ showTest }) => {
  return (
    <div className='stats'>
      <BsKeyboard onClick={showTest}/>
      <MainStats />
      <SubStats />
    </div>
  );
};

export default Stats;
