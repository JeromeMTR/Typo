import React, { useState } from 'react';
import TypingTest from './components/TypingTest.jsx';
import Stats from './components/Stats.jsx';

const App = () => {
  const [test, setTest] = useState(true);
  const [testData, setTestData] = useState();
  const [currentSeconds, setCurrentSeconds] = useState(15);

  const toggleTest = () => {
    return setTest((prevState) => !prevState);
  };

  return (<div className='app'>
    {test ?
      <TypingTest
        currentSeconds={ currentSeconds }
        setCurrentSeconds={ setCurrentSeconds }
        showStats={ toggleTest }
        test={ test }
        liftData={ setTestData }
      /> :
      <Stats
        currentSeconds={ currentSeconds }
        test={ test }
        data={ testData }
        showTest={ toggleTest }
      />
    }
  </div>
  );
};

export default App;
