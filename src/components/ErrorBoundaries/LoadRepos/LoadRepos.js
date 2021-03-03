import React from 'react';

export const LoadRepos = ({ closePopUp }) => {
  return (
    <div className='get-user-error'>
      <p>
        <span>There is no more repos to show!</span>
      </p>

      <p>
        <button onClick={closePopUp}>X</button>
      </p>
    </div>
  )
}