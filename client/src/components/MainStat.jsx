import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BsKeyboard } from 'react-icons/bs';

const MainStat = ({ showTest }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <div>

      <BsKeyboard onClick={showTest}/>
    </div>
  );
};

MainStat.propTypes = {
  showTest: PropTypes.func.isRequired
};

export default MainStat;
