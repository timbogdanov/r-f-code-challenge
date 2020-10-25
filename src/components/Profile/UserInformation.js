import React from 'react';

import style from './cssModules/UserInformation.module.css';

const UserInformation = () => {
  return (
    <div className={style.container}>
      <div className={style.imagesContainer}>
        <div className={style.coverImg}>
          <div className={style.profileImg}></div>
        </div>
      </div>
      <div className={style.userInfo}></div>
      <div className={style.userStats}></div>

      <div className={style.userDetails}>
        <p className={style.fullName}>Filip Martin Jose</p>
        <p className={style.city}>Los Angeles</p>
        <button className={style.subscription}>Pro Level</button>
      </div>
    </div>
  );
};

export default UserInformation;
