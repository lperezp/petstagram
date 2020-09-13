import React from 'react';
import './../../../assets/styles/scss/components/_cards.scss';
import ProfileHistory from './profile_history';

const History: React.FC = () => {
  return (
    <div className='card__post card__history'>
      <div className='history__scroll'>
        <ProfileHistory />
        <ProfileHistory />
        <ProfileHistory />
        <ProfileHistory />
        <ProfileHistory />
        <ProfileHistory />
      </div>
    </div>
  );
};

export default History;
