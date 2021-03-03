import React from 'react';

import './RepoList.scss';

import { RepoItem } from '../../Item/RepoItem/RepoItem';

export const RepoList = ({ userRepos }) => {
  return (
    <div className='repo-data-list'>
      {
        userRepos.map((item, index) => {
          return (
            <RepoItem item={item} key={`List item-${index}`} />
          )
        })
      }
    </div>
  )
}