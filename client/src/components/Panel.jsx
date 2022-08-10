import React, { useState, useEffect } from 'react';

const Panel = ({ seconds, showStats }) => {
  const [countDown, setCountDown] = useState(60);



  return (
    <div>
      <span onClick={ showStats }>Go to Stats</span>
      <span>{ countDown }</span>
    </div>
  );
};

export default Panel;
