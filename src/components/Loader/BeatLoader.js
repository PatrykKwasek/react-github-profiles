import React from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import './Loader.scss';

export const BeatLoader = () => {
  return (
    <div className='example'>
      <BeatLoader size={30} />
    </div>
  )
}