import React from 'react';
import { Image } from '../Image/Image';
import { Button } from '../Button/Button';
import { Search } from '../Search/Search';
import { Header } from '../Header/Header';
import './Card.scss';

export const Card = () => {
  return (
    <div className='user-card-profile'>
      <Header />
      {/* <Search /> */}

      <div className='about-user'>
        <div className='user-image'>
          <Image src='https://avatars.githubusercontent.com/u/6692364?v=4' className='image' />
        </div>

        <div className='user-name'>
          <p>
            <span>Cecilia Patton</span>
          </p>

          <p>
            <span>@cecilia_patton</span>
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
              <strong>5922</strong>
            </p>
          </div>

          <div className='following'>
            <p className='field-name'>
              <span>Following</span>
            </p>
            <p className='field-value'>
              <strong>34</strong>
            </p>
          </div>
        </div>

        <div className='repos-number'>
          <p className='field-name'>
            <span>Public repositories</span>
          </p>
          <p className='field-value'>
            <strong>75</strong>
          </p>
        </div>
      </div>

      <div className='user-repositories'>
        <span>List of user repositories:</span>
      </div>

      <div className='show-more-btn'>
        <Button txt='VIEW MORE' className='more-repo' />
      </div>
    </div>
  )
}