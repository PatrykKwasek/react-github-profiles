import React from 'react';
import { Sun, Moon } from 'react-feather';
import './Header.scss';

export const Header = () => {
  return (
    <div className='header'>
      <h2 className='app-name'>Github profiles</h2>
      <div className='mode'>
        <Sun />
      </div>
    </div>
  )
}