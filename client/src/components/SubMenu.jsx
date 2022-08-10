import React from 'react';
import TimeSelection from './TimeSelection.jsx';
import Panel from './Panel.jsx';

const SubMenu = ({ showStats, countDown, setCountDown }) => {
  return (
    <div className='submenu'>
      <TimeSelection
        setCountDown={setCountDown}
      />
      <Panel
        countDown={ countDown }
        showStats={ showStats }
      />
    </div>
  );
};

export default SubMenu;
