import React from 'react';

import style from './cssModules/ChangePlan.module.css';
import boat from '../../assets/boat.png';

const ChangePlan = () => {
  return (
    <div className={style.container}>
      <div className={style.contentLeft}>
        <img src={boat} alt='boat' />

        <div className={style.planName}>
          <h2>Small Business</h2>
          <button>Change Plan</button>
        </div>
      </div>
      <div className={style.contentRight}>
        <p>
          <span>$</span> 8,350 <span> / year</span>
        </p>
      </div>
    </div>
  );
};

export default ChangePlan;
