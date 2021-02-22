import React from 'react';
import { Card } from '../../components/Card/Card';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { Search } from '../../components/Search/Search';
import './Home.scss';


export const Home = () => {
  return (
    <div className='home-section'>
      <Header />
      <div className='content'>
        <Search />
        <Card />
      </div>
      <Footer />
    </div>
  )
}