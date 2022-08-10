import React from 'react';
import TimeSelection from './TimeSelection.jsx';
import Panel from './Panel.jsx';

const SubMenu = ({ showStats }) => {
  return (
    <div className='submenu'>
      <TimeSelection />
      <Panel
        showStats={ showStats }
      />
    </div>
  );
};

export default SubMenu;
