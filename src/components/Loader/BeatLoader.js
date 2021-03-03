import React from 'react';

import './Loader.scss';

import BeatLoader from "react-spinners/BeatLoader";

export const BeatLoader = () => {
  return (
    <div className='example'>
      <BeatLoader size={30} />
    </div>
  )
}