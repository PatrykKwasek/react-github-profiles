import React, { useState } from 'react';
import { Card } from '../../components/Card/Card';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { Search } from '../../components/Search/Search';
import img from '../../assets/images/search.svg'
import './Home.scss';
import { Image } from '../../components/Image/Image';

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
        {/* <Card /> */}
        <div className='awaiting-search-image'>
          <Image src={img} alt='search-vector-image' className='search-image' />
        </div>
      </div>
      <Footer />
    </div>
  )
}