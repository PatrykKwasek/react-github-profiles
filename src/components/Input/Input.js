import React from 'react';

export const Input = ({ type, placeholder, className }) => {
  return (
    <input type={type} placeholder={placeholder} className={className} />
  )
}