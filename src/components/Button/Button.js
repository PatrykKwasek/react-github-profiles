import React from 'react';

export const Button = ({ txt, className }) => {
  return (
    <button className={className}>{txt}</button>
  )
}