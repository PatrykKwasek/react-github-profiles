import React from 'react';

import { Link } from '../../Link/Link';

export const RepoItem = ({ item }) => {
  return (
    <p key={item.id} className='repo-item'>
      <Link
        href={item.html_url}
        target='_blank'
        rel='noreferrer'
      >
        {`${item.name}`}
      </Link>
    </p>
  )
}