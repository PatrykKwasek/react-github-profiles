import React from 'react';
import PacmanLoader from "react-spinners/PacmanLoader";
import './Loader.scss';

export const PacmanLoader = () => {
  return (
    <div className='example'>
      <PacmanLoader size={30} />
    </div>
  )
}