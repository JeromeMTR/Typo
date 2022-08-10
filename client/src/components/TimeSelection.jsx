import React from 'react';

const TimeSelection = ({ setCountDown }) => {
  let timeOptions = [15, 30, 60];

  return (
    <aside className='time-selection-container'>
      {timeOptions.map((seconds, i) => {
        return <div
          className='time-selection'
          key={i}
          onClick={() => setCountDown(seconds)}>{seconds}
        </div>;
      })}
    </aside>
  );
};

export default TimeSelection;
