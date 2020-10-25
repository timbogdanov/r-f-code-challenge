import React from 'react';

import style from './cssModules/UserDetails.module.css';

const UserDetails = () => {
  return (
    <div className={style.container}>
      <div className={style.detailContainer}>
        <h2>Followers</h2>
        <p>980</p>
      </div>
      <div className={style.detailContainer}>
        <h2>Projects</h2>
        <p>142</p>
      </div>
      <div className={style.detailContainer}>
        <h2>Rank</h2>
        <p>129</p>
      </div>
    </div>
  );
};

export default UserDetails;
