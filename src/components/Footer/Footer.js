import React from 'react';

import './Footer.scss';

import { Linkedin, GitHub } from 'react-feather';

import { Link } from '../Link/Link';

export const Footer = () => {
  return (
    <div className='footer'>
      <p className='para'>
        <span>Patryk Kwasek © 2021</span>
      </p>

      <div className='footer-icons'>
        <p className='icon'>
          <Link
            href='https://www.linkedin.com/in/patryk-kwasek-0b9a821b3/'
            target='_blank'
            rel='noreferrer'
          >
            <Linkedin />
          </Link>
        </p>

        <p className='icon'>
          <Link
            href='https://github.com/PatrykKwasek'
            target='_blank'
            rel='noreferrer'
          >
            <GitHub />
          </Link>
        </p>
      </div>
    </div>
  )
}