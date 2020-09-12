import React from 'react';
import './../../../assets/styles/scss/components/_cards.scss';
import photo from './../../../post.jpg';
import ic_paw_outline from './../../../assets/img/ic_paw-outline.svg';
import ic_comment from './../../../assets/img/ic_comment.svg';
import ic_send from './../../../assets/img/ic_send.svg';
import profile from './../../../assets/img/profile.jpg';
import ic_more from './../../../assets/img/ic_more-horizontal.svg';
import ic_bookmark from './../../../assets/img/ic_bookmark.svg';

const Card: React.FC = () => {
  return (
    <div className='card__post'>
      <div className='post__header'>
        <div className='post__header__user'>
          <img src={profile} alt='profile' className='post__header__photo' />
          <label className='post__header__username'>lperezp</label>
        </div>
        <div className='post__header__options'>
          <img src={ic_more} alt='profile' className='ic-options' />
        </div>
      </div>
      <img className='post__photo' src={photo} alt='post' />
      <div className='post__footer'>
        <div className='post__reactions'>
          <div className='post__reactions__left'>
            <img src={ic_paw_outline} alt='ic_paw_outline' />
            <img src={ic_comment} alt='ic_comment' />
            <img src={ic_send} alt='ic_send' />
          </div>
          <div className='post__reactions__right'>
            <img src={ic_bookmark} alt='we' height='24' />
          </div>
        </div>
        <div className='post__like'>
          Les gusta a <span>lperezp</span>
        </div>
        <div className='post__comment'>
          <div>
            <span>lperezp</span> I like it!
          </div>
          <div>
            <span>dogshow</span> Oh! Amazing!!!!
          </div>
        </div>
        <small className='post__time'>Hace 3 minutos</small>
      </div>
    </div>
  );
};

export default Card;
