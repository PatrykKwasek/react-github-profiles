import React from 'react';

export const RepoList = ({ userRepos }) => {
  return (
    <div className='repo-data-list'>
      {
        userRepos.map(item => {
          return (
            <p key={item.id} className='repo-item'>
              <a href={item.html_url}>{`${item.name}`}</a>
            </p>
          )
        })
      }
    </div>
  )
}