import React from 'react';
import SubMenu from './SubMenu.jsx';
import Text from './Text.jsx';

const TypingTest = ({ showStats }) => {

  return (
    <div className='typingtest'>
      <SubMenu
        showStats={ showStats }
      />
      <Text
        onClick={ showStats }
      />
      <input></input>
      <div>Restart Button</div>
    </div>
  );
};

export default TypingTest;
