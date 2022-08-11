import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BsKeyboard } from 'react-icons/bs';

const MainStat = ({ showTest, preview, data }) => {
  const [toggle, setToggle] = useState(true);

  if (toggle) {

  }

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
  showTest: PropTypes.func.isRequired
};

export default MainStat;
