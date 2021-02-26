import React from 'react';
import { RepoItem } from '../../Item/RepoItem/RepoItem';
import './RepoList.scss';

export const RepoList = ({ userRepos }) => {
  return (
    <div className='repo-data-list'>
      {
        userRepos.map(item => {
          return (
            <RepoItem item={item} />
          )
        })
      }
    </div>
  )
}