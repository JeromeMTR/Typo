import React from 'react';
import PropTypes from 'prop-types';
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

Panel.propTypes = {
  showStats: PropTypes.func.isRequired,
  countDown: PropTypes.number.isRequired
};

export default Panel;