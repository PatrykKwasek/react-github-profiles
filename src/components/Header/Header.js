import React from 'react';
import { Button } from '../Button/Button';
import './Header.scss';

export const Header = () => {
  return (
    <div className='header'>
      <h2 className='app-name'>Github profiles</h2>
      <Button txt='Switch mode' className='btn' />
    </div>
  )
}