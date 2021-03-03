import React from 'react';

import './Loader.scss';

import PacmanLoader from "react-spinners/PacmanLoader";

export const PacmanLoader = () => {
  return (
    <div className='example'>
      <PacmanLoader size={30} />
    </div>
  )
}