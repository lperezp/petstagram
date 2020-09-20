import React from 'react';
import './../../../scss/components/_cards.scss';
import './../../../scss/components/_buttons.scss';
import firebase from 'firebase/app';
import ic_google from './../../../assets/img/ic_google.svg';
import logo_petstagram from './../../../assets/img/logo_petstagram.svg';

import 'firebase/auth';

const CardLogin: React.FC = () => {
  const signInGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => console.log(result))
      .catch((e) => console.log(e));
  };
  return (
    <div className='card card__login'>
      <img src={logo_petstagram} alt='logo.petstagram' />
      <p>Iniciar sesión con Google</p>
      <button
        className='btn-primary'
        onClick={() => {
          signInGoogle();
        }}
      >
        <img src={ic_google} alt='icon-google' />
      </button>
    </div>
  );
};
export default CardLogin;
