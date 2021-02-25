import React from 'react';
import { Image } from '../Image/Image';
import { Button } from '../Button/Button';
import './Card.scss';

export const Card = ({ data }) => {
  return (
    <div className='user-card-profile'>
      <div className='about-user'>
        <div className='user-image'>
          {/* <Image src='https://avatars.githubusercontent.com/u/52383014?v=4' alt='user-avatar' className='image' /> */}
          <Image src={data.avatar_url} alt='user-avatar' className='image' />
        </div>

        <div className='user-name'>
          <p className='fullname'>
            {/* <span>Cecilia Patton</span> */}
            <span>{data.name || 'Not found'}</span>
          </p>

          <p className='username'>
            {/* <span>@cecilia_patton</span> */}
            <span>{`@${data.login}`}</span>
          </p>
        </div>
      </div>

      <div className='about-profile'>
        <div className='follow'>
          <div className='followers'>
            <p className='field-name'>
              <span>Followers</span>
            </p>

            <p className='field-value'>
              {/* <strong>5922</strong> */}
              <strong>{data.followers}</strong>
            </p>
          </div>

          <div className='following'>
            <p className='field-name'>
              <span>Following</span>
            </p>

            <p className='field-value'>
              {/* <strong>34</strong> */}
              <strong>{data.following}</strong>
            </p>
          </div>
        </div>

        <div className='repos-number'>
          <p className='field-name'>
            <span>Public repositories</span>
          </p>

          <p className='field-value'>
            {/* <strong>75</strong> */}
            <strong>{data.public_repos}</strong>
          </p>
        </div>
      </div>

      <div className='user-repositories'>
        <span>List of user repositories:</span>
        {/* Put user repositories list here */}
      </div>

      <div className='show-more-btn'>
        <Button txt='VIEW MORE' className='more-repo' />
      </div>
    </div>
  )
}