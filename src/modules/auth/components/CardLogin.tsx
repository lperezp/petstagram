import React from 'react';
import './../../../scss/components/_cards.scss';
import './../../../scss/components/_buttons.scss';
import firebase from 'firebase/app';
import ic_google from './../../../assets/img/ic_google.svg';
import logo_petstagram from './../../../assets/img/logo_petstagram.svg';

import 'firebase/auth';
import { useHistory } from 'react-router-dom';

const CardLogin: React.FC = () => {
  const history = useHistory();
  const signInGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        history.push('/home');
      })
      .catch((e) => {
        alert(e);
        console.log('error', e);
      });
  };
  return (
    <div className='card card__login'>
      <img
        src={logo_petstagram}
        className='card__login__logo'
        alt='logo.petstagram'
      />
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
