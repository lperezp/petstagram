import React from 'react';
import './../../../scss/components/_cards.scss';
import ProfileHistory from './ProfileHistory';

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
