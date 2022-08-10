import React from 'react';
import SubMenu from './SubMenu.jsx';

const TypingTest = ({ showStats }) => {

  return (
    <div className='typingtest'>
      <SubMenu />
      <div onClick={ showStats }>TypingTest</div>
      <div>Restart Button</div>
    </div>
  );
};

export default TypingTest;
