import React from 'react';

export const GetUser = ({ closePopUp }) => {
  return (
    <div className='get-user-error'>
      <p>
        <span>Cannot find user!</span>
      </p>

      <p>
        <button onClick={closePopUp}>X</button>
      </p>
    </div>
  )
}