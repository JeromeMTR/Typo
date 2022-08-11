import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BsKeyboard } from 'react-icons/bs';

const MainStat = ({ showTest, toggle, scores, main, allScores, topThree}) => {
  const [avgWpm, setAvgWpm] = useState();
  const [avgAccuracy, setAvgAccuracy] = useState();

  const getAvg = () => {
    let wpm = 0;
    let accuracy = 0;
    let length = allScores.length;

    for (let i = 0; i < length; i++) {
      console.log(allScores);
      wpm += allScores[i].wpm;
      accuracy += allScores[i].accuracy;
      console.log(wpm, accuracy);
    }

    wpm = Math.round(wpm/length * 100) / 100;
    accuracy = Math.round(accuracy/length * 100) / 100;

    setAvgWpm(wpm);
    setAvgAccuracy(accuracy);
  };

  useEffect(() => {
    if (toggle) {
      getAvg();
    } else {
      getAvg();
    }
  }, []) ;


  return (
    <div>
      <div>
        <h2>High Score</h2>
        <h2>Average</h2>
      </div>
      <div>

      </div>
      <BsKeyboard onClick={showTest}/>
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
