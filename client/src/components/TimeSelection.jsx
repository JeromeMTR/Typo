import React from 'react';
import PropTypes from 'prop-types';

const TimeSelection = ({ setCountDown, countDown, setCurrentSeconds }) => {
  let timeOptions = [15, 30, 60];

  const chnageTime = (e, time) => {
    setCountDown(e, time);
    setCurrentSeconds(time);
    return;
  };

  return (
    <aside className='time-selection-container'>
      {timeOptions.map((seconds, i) => {
        return <div
          className={countDown === seconds ? 'time-selection-selected' : 'time-selection'}
          key={i}
          onClick={(e) => chnageTime(e, seconds)}>{seconds}
        </div>;
      })}
    </aside>
  );
};

TimeSelection.propTypes = {
  setCountDown: PropTypes.func.isRequired,
  setCurrentSeconds: PropTypes.func.isRequired,
  countDown: PropTypes.number.isRequired
};

export default TimeSelection;
