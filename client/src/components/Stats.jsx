import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import MainStat from './MainStat.jsx';
import SubStat from './SubStat.jsx';

const localhost = 'http://localhost:3000/typo';

const Stats = ({ showTest }) => {
  const [scores, setScores] = useState();
  const [main, toggleMain] = useState(true);
  const [sub, toggleSub] = useState(true);

  const get = () => {
    return axios.get(localhost)
      .then( ( {data} ) => {
        setScores(data);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    get();
  }, []);

  if (!scores) return null;
  return (
    <div className='stats'>
      <MainStat
        main={main}
        toggle={toggleMain}
        showTest={showTest}
        {...scores}
      />
      <SubStat
        sub={sub}
        toggle={toggleSub}
        {...scores}
      />
    </div>
  );
};

Stats.propTypes = {
  showTest: PropTypes.func.isRequired
};

export default Stats;
