import React from 'react';
import './../../../scss/components/_navbar.scss';
import logo_petstagram from './../../../assets/img/logo_petstagram.svg';
import ic_paw from './../../../assets/img/ic_paw-outline.svg';
import ic_home from './../../../assets/img/ic_home.svg';
import ic_send from './../../../assets/img/ic_send.svg';
import profile from './../../../assets/img/profile.jpg';

const NavBar: React.FC = () => {
  return (
    <div className='container__navbar'>
      <div className='box__navbar'>
        <img
          className='box__navbar__logo'
          src={logo_petstagram}
          alt='logo-petstagram'
        />
        <input
          type='text'
          className='box__navbar__search'
          placeholder='Buscar'
        />
        <div className='navbar__icon'>
          <img src={ic_home} alt='ic-home' />
          <img src={ic_send} alt='ic-send' />
          <img src={ic_paw} alt='ic-paw' />
          <img src={profile} alt='profile' />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
