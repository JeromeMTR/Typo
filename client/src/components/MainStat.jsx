import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BsKeyboard } from 'react-icons/bs';

const MainStat = ({ showTest, toggle, scores, main, allScores, topThree}) => {
  const [avg, setAvg] = useState();
  console.log(topThree[0].date_time);
  console.log(new Date())

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
