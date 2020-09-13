import React from 'react';
import './../../../scss/components/_footer.scss';

const Footer: React.FC = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className='footer'>
      <p className='footer__text'>Made with React and lots of coffee :)</p>
      <p className='footer__copyright'>© {year} PETSTAGRAM</p>
    </div>
  );
};

export default Footer;
