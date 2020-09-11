import React from 'react';
import './../../../assets/styles/scss/components/_cards.scss';
import photo from './../../../post.jpg';

const Card: React.FC = () => {
  return (
    <div className='card__post'>
      <div className="post__header">
        <img src={photo} alt="profile" className="post__header__photo" />
        <label className="post__header__username">lperezp</label>
      </div>
      <img className="post__photo" src={photo} />
      <div className="post__like">Les gusta a <span>lperezp</span></div>
      <div className="post__comment"><span>lperezp</span> I like it!</div>
      <small className="post__time">Les gusta a <span>lperezp</span></small>
    </div>
  );
};

export default Card;
