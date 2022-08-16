import React from 'react';
import PropTypes from 'prop-types';
import TimeSelection from './TimeSelection.jsx';
import Panel from './Panel.jsx';

const SubMenu = ({ showStats, countDown, setCountDown, setCurrentSeconds }) => {
  return (
    <div className='submenu'>
      <TimeSelection
        setCurrentSeconds={setCurrentSeconds}
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
  setCurrentSeconds: PropTypes.func.isRequired,
  countDown: PropTypes.number.isRequired,
  setCountDown: PropTypes.func.isRequired
};

export default SubMenu;