import React from 'react';
import Time from './Time.jsx';
import Panel from './Panel.jsx';

const SubMenu = ({ showStats }) => {
  return (
    <div className='submenu'>
      <Time />
      <Panel />
    </div>
  );
};

export default SubMenu;
