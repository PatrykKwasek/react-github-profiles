import React from 'react';
import { Linkedin, GitHub } from 'react-feather';
import './Footer.scss';

export const Footer = () => {
  return (
    <div className='footer'>
      <p className='para'>Patryk Kwasek © 2021</p>

      <div className='footer-icons'>
        <p className='icon'>
          <a href='https://www.linkedin.com/in/patryk-kwasek-0b9a821b3/' target='_blank'>
            <Linkedin />
          </a>
        </p>

        <p className='icon'>
          <a href='https://github.com/PatrykKwasek' target='_blank'>
            <GitHub />
          </a>
        </p>
      </div>
    </div>
  )
}