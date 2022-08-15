import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BsKeyboard } from 'react-icons/bs';
import line from '../assets/photos/thick-vertical-line.png';

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

  if (!highScore ) return null;
  return (
    <div className='stats-container'>
      <div className='main-stat-menu'>
        <div className='main-menu-headings'>
          <h2
            className='high-score-heading'
            onClick={() => toggle(true)}
          >
            High Score
          </h2>
          <h2 onClick={() => toggle(false)}
            className='average-heading'
          >
            Average
          </h2>
        </div>
        <BsKeyboard
          className='keyboard-icon'
          onClick={showTest}/
        >
      </div>

      {main ?
        <div>{highScore.wpm}, {highScore.accuracy}, {highScore.date_time}</div>  :
        <div>{average.wpm}, {average.accuracy}, {highScore.date_time}</div>
      }
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
