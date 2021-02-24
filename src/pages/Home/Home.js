import React, { useState } from 'react';
import { Card } from '../../components/Card/Card';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { Search } from '../../components/Search/Search';
import './Home.scss';

export const Home = () => {
  const [mode, setMode] = useState(localStorage.getItem('mode'));

  const toggleMode = () => {
    const actualState = mode === 'dark' ? 'light' : 'dark'
    localStorage.setItem('mode', actualState);
    setMode(actualState);
  }

  return (
    <div className={`home-section ${mode}`}>
      <Header mode={mode} onClick={toggleMode} />
      <div className='content'>
        <Search />
        <Card />
      </div>
      <Footer />
    </div>
  )
}