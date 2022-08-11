import React from 'react';

const TimeSelection = ({ setCountDown, countDown }) => {
  let timeOptions = [15, 30, 60];

  return (
    <aside className='time-selection-container'>
      {timeOptions.map((seconds, i) => {
        return <div
          className={countDown === seconds ? 'time-selection-selected' : 'time-selection'}
          key={i}
          onClick={(e) => setCountDown(e, seconds)}>{seconds}
        </div>;
      })}
    </aside>
  );
};

export default TimeSelection;
