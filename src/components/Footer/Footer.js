import React from 'react';
import { Linkedin, GitHub } from 'react-feather';
import './Footer.scss';

export const Footer = () => {
  return (
    <div className='footer'>
      <p className='para'>
        <span>Patryk Kwasek © 2021</span>
      </p>

      <div className='footer-icons'>
        <p className='icon'>
          <a href='https://www.linkedin.com/in/patryk-kwasek-0b9a821b3/' target='_blank' rel='noreferrer'>
            <Linkedin />
          </a>
        </p>

        <p className='icon'>
          <a href='https://github.com/PatrykKwasek' target='_blank' rel='noreferrer'>
            <GitHub />
          </a>
        </p>
      </div>
    </div>
  )
}