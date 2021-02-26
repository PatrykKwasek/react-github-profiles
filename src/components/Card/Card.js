import React from 'react';
import { Image } from '../Image/Image';
import { Button } from '../Button/Button';
import { RepoList } from '../List/RepoList/RepoList';
import './Card.scss';

export const Card = ({ userData, userRepos, loadMoreRepos }) => {
  return (
    <div className='user-card-profile'>
      <div className='about-user'>
        <div className='user-image'>
          <Image src={userData.avatar_url} alt='user-avatar' className='image' />
        </div>

        <div className='user-name'>
          <p className='fullname'>
            <span>{userData.name || 'Not found'}</span>
          </p>

          <p className='username'>
            <span>{`@${userData.login}`}</span>
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
              <strong>{userData.followers}</strong>
            </p>
          </div>

          <div className='following'>
            <p className='field-name'>
              <span>Following</span>
            </p>

            <p className='field-value'>
              <strong>{userData.following}</strong>
            </p>
          </div>
        </div>

        <div className='repos-number'>
          <p className='field-name'>
            <span>Public repositories</span>
          </p>

          <p className='field-value'>
            <strong>{userData.public_repos}</strong>
          </p>
        </div>
      </div>

      <div className='user-repositories'>
        <span>List of user repositories:</span>
        <RepoList userRepos={userRepos} />
      </div>

      <div className='show-more-btn'>
        <Button txt='VIEW MORE' className='more-repo' onClick={loadMoreRepos} />
      </div>
    </div>
  )
}