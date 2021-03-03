import React from 'react';

export const Unauthorized = ({ closePopUp }) => {
  return (
    <div className='get-user-error'>
      <p>
        <span>Access denied! Try again later!</span>
      </p>

      <p>
        <button onClick={closePopUp}>X</button>
      </p>
    </div>
  )
}