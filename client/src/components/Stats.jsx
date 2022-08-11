import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import MainStats from './MainStat.jsx';
import SubStats from './SubStat.jsx';

const localhost = 'http://localhost:3000/typo';

const Stats = ({ showTest }) => {
  const [main, toggleMain] = useState({preview: true});
  const [sub, toggleSub] = useState({preview: true});

  const getAll = () => {
    return axios.get(localhost)
      .then(({ data }) => {
        console.log(data);
        toggleMain(() => ({
          ...main,
          data: data
        }));
        toggleSub({
          ...sub,
          data: data
        });
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div className='stats'>
      <MainStats
        showTest={showTest}
        {...main}
      />
      <SubStats {...sub}/>
    </div>
  );
};

Stats.propTypes = {
  showTest: PropTypes.func.isRequired
};

export default Stats;
