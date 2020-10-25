import React from 'react';

import UserInformation from './UserInformation';
import UserDetails from './UserDetails';
import style from './cssModules/Profile.module.css';

const Profile = () => {
  return (
    <div className={style.container}>
      <UserInformation />

      <UserDetails />
    </div>
  );
};

export default Profile;
