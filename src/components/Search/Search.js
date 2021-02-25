import React from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import './Search.scss';

export const Search = ({ onClick, onChange }) => {
  return (
    <div className='search'>
      <Input type='text' name='search_user' placeholder='Github username' onChange={onChange} className='input' />
      <Button txt='GO' className='btn-search' type='button' onClick={onClick} />
    </div>
  )
}