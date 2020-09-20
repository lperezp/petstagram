import React from 'react';
import './../../../scss/layout/_auth.scss';
import CardLogin from '../components/CardLogin';
import phone from './../../../assets/img/phone.png';
import Footer from '../../home/components/Footer';

const SignIn: React.FC = () => {
  return (
    <div className='container__signIn'>
      <div className='container__signIn__img'>
        <img src={phone} alt='phone' />
      </div>
      <div className='container__signIn__form'>
        <CardLogin />
        <div className='box__footer'>
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default SignIn;
