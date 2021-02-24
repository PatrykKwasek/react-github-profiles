import React from 'react';
import { Sun, Moon } from 'react-feather';
import './Header.scss';

export const Header = ({ mode, onClick }) => {
  return (
    <div className='header'>
      <h2 className='app-name'>
        <span>Github profiles</span>
      </h2>

      <div className='mode' onClick={onClick} aria-hidden='true'>
        {mode === 'dark' ? <Sun /> : <Moon />}
      </div>
    </div>
  )
}