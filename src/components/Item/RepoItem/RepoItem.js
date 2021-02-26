import React from 'react';

export const RepoItem = ({ item }) => {
  return (
    <p key={item.id} className='repo-item'>
      <a href={item.html_url}>{`${item.name}`}</a>
    </p>
  )
}