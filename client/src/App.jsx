import React, { useState } from 'react';
import TypingTest from './components/TypingTest.jsx';
import Stats from './components/Stats.jsx';

const App = () => {
  const [test, setTest] = useState(true);
  const [testData, setTestData] = useState();

  const toggleTest = () => {
    setTest((prevState) => !prevState);
  };

  return (<>
    {test ?
      <TypingTest
        showStats={ toggleTest }
        liftData={ setTestData }
      /> :
      <Stats
        data={ testData }
        showTest={ toggleTest }
      />
    }
  </>
  );
};

export default App;
