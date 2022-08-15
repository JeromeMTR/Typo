import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const SubStat = ({sub, toggle, topThree, recent, showTest}) => {

  if (topThree.length === 0 || recent.length === 0) return <h2 className='no-data' onClick={showTest}>Return To Test</h2>;
  return (
    <div className='stats-container'>
      <div className='main-stat-menu'>
        <div className='main-menu-headings'>
          <h2
            className={sub ? 'high-score-heading main-selected' : 'high-score-heading'}
            onClick={() => toggle(true)}
          >
            Top Three
          </h2>
          <h2
            className={!sub ? 'average-heading main-selected' : 'average-heading'}
            onClick={() => toggle(false)}
          >
            Most Recent
          </h2>
        </div>
      </div>
      <div
        className='data-headings'
      >
        <div className='wpm-heading'>WPM</div>
        <div className='accuracy-heading'>Accuracy</div>
        <div className='date-heading'>Date</div>
      </div>
      <div className='data-container'>
        {sub ?
          topThree.map((scoreObj, i) => {
            return <div className='stats-data' key={i}>
              <div className='data'>{scoreObj.wpm}</div>
              <div className='data'>{scoreObj.accuracy}%</div>
              <div className='data'>{scoreObj.date_time}</div>
            </div>;
          }) :
          recent.map((scoreObj, i) => {
            return <div className='stats-data' key={i}>
              <div className='data'>{scoreObj.wpm}</div>
              <div className='data'>{scoreObj.accuracy}%</div>
              <div className='data'>{scoreObj.date_time}</div>
            </div>;
          })
        }
      </div>
    </div>
  );
};

SubStat.propTypes = {
  sub: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  recent: PropTypes.array.isRequired,
  topThree: PropTypes.array.isRequired,
};

export default SubStat;