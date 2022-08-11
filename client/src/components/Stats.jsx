import React from 'react';
import PropTypes from 'prop-types';
import { BsKeyboard } from 'react-icons/bs';
import MainStats from './MainStat.jsx';
import SubStats from './SubStat.jsx';

const Stats = ({ showTest }) => {
  return (
    <div className='stats'>
      <BsKeyboard onClick={showTest}/>
      <MainStats />
      <SubStats />
    </div>
  );
};

Stats.propTypes = {
  showTest: PropTypes.func.isRequired
};

export default Stats;
