import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import MainStat from './MainStat.jsx';
import SubStat from './SubStat.jsx';

const localhost = 'http://localhost:3000/typo';

const Stats = ({ showTest }) => {
  const [data, setData] = useState();
  const [main, toggleMain] = useState(true);
  const [sub, toggleSub] = useState(true);


  const get = () => {
    return axios.get(localhost)
      .then(( {data} ) => {
        setData(data);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <div className='stats'>
      <MainStat
      />
      <SubStat />
    </div>
  );
};

Stats.propTypes = {
  showTest: PropTypes.func.isRequired
};

export default Stats;
