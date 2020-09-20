import React from 'react';
import './../../../scss/components/_card-profile.scss';
import profile from './../../../assets/img/profile.jpg';

const CardProfile: React.FC = () => {
  return (
    <div className='box'>
      <img className='box__profile' src={profile} alt='profile' />
      <div className='box__username'>
        <p className='box__username--name'>Luis Eduardo</p>
        <small className='box__username--username'>lperezp</small>
      </div>
    </div>
  );
};

export default CardProfile;
