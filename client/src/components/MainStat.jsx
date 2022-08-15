import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BsKeyboard } from 'react-icons/bs';

const MainStat = ({ showTest, toggle,  main, allScores, topThree}) => {
  const [highScore, setHighScore] = useState();
  const [average, setAverage] = useState();

  const getAvg = () => {
    let wpm = 0;
    let accuracy = 0;
    let length = allScores.length;

    for (let i = 0; i < length; i++) {
      wpm += allScores[i].wpm;
      accuracy += allScores[i].accuracy;
    }

    let date = new Date().toString().slice(0, 21);
    let avg = {
      wpm: Math.round(wpm/length * 100) / 100,
      accuracy: Math.round(accuracy/length * 100) / 100,
      date_time: date
    };

    return setAverage(avg);
  };

  useEffect(() => {
    setHighScore(topThree[0]);
    getAvg();
  }, [main]) ;

  if (!highScore ) return <h2 className='no-data' onClick={showTest}>Start Typing</h2>;
  return (
    <div className='stats-container'>
      <div className='main-stat-menu'>
        <div className='main-menu-headings'>
          <h2
            className={main ? 'high-score-heading main-selected' : 'high-score-heading'}
            onClick={() => toggle(true)}
          >
            High Score
          </h2>
          <h2
            className={!main ? 'average-heading main-selected' : 'average-heading'}
            onClick={() => toggle(false)}
          >
            Average
          </h2>
        </div>
        <BsKeyboard
          className='keyboard-icon'
          onClick={showTest}/
        >
      </div>
      <div
        className='data-headings'
      >
        <div className='wpm-heading'>WPM</div>
        <div className='accuracy-heading'>Accuracy</div>
        <div className='date-heading'>Date</div>
      </div>
      <div className='data-container'>
        {main ?
          <div className='stats-data'>
            <div className='data'>{highScore.wpm}</div>
            <div className='data'>{highScore.accuracy}%</div>
            <div className='data'>{highScore.date_time}</div>
          </div>  :
          <div className='stats-data'>
            <div className='data'>{average.wpm}</div>
            <div className='data'>{average.accuracy}%</div>
            <div className='data'>{average.date_time}</div>
          </div>
        }
      </div>
      <div>
      </div>
    </div>
  );
};

MainStat.propTypes = {
  showTest: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  main: PropTypes.bool.isRequired,
  allScores: PropTypes.array.isRequired,
  topThree: PropTypes.array.isRequired,
};

export default MainStat;
