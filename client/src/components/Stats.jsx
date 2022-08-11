import React from 'react';
import PropTypes from 'prop-types';
import MainStats from './MainStat.jsx';
import SubStats from './SubStat.jsx';

const Stats = ({ showTest }) => {
  return (
    <div className='stats'>
      <MainStats
        showTest={showTest}

      />
      <SubStats />
    </div>
  );
};

Stats.propTypes = {
  showTest: PropTypes.func.isRequired
};

export default Stats;
