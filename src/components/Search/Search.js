import React from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import './Search.scss';

export const Search = () => {
  return (
    <div className='search'>
      <Input type='text' placeholder='Github username' className='input' />
      <Button txt='GO' className='btn-search' />
    </div>
  )
}