import React from 'react';
import PropTypes from 'prop-types';
import TimeSelection from './TimeSelection.jsx';
import Panel from './Panel.jsx';

const SubMenu = ({ showStats, countDown, setCountDown, start, setCurrentSeconds }) => {
  return (
    <div className='submenu'>
      <TimeSelection
        setCurrentSeconds={setCurrentSeconds}
        start={start}
        setCountDown={setCountDown}
        countDown={ countDown }
      />
      <Panel
        countDown={ countDown }
        showStats={ showStats }
      />
    </div>
  );
};

SubMenu.propTypes = {
  showStats: PropTypes.func.isRequired,
  start: PropTypes.func.isRequired,
  countDown: PropTypes.number.isRequired,
  setCountDown: PropTypes.func.isRequired
};

export default SubMenu;
