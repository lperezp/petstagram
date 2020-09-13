import React from 'react';
import './../../../assets/styles/scss/components/_card-profile.scss';
import profile from './../../../assets/img/profile.jpg';

const CardProfile: React.FC = () => {
  return (
    <div className='card'>
      <img className='card__profile' src={profile} alt='profile' />
      <div className='card__username'>
        <p className='card__username--name'>Luis Eduardo</p>
        <small className='card__username--username'>lperezp</small>
      </div>
    </div>
  );
};

export default CardProfile;
