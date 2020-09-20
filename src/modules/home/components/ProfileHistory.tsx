import React from 'react';
import './../../../scss/components/_history.scss';
import profile from './../../../assets/img/profile.jpg';
const ProfileHistory: React.FC = () => {
  return (
    <div className='circle__history'>
      <img src={profile} className='circle__history__profile' alt='profile' />
    </div>
  );
};

export default ProfileHistory;
