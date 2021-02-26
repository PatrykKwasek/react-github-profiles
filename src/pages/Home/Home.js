import React, { useState } from 'react';
import { Card } from '../../components/Card/Card';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { Search } from '../../components/Search/Search';
import { Image } from '../../components/Image/Image';
import axios from 'axios';
import img from '../../assets/images/search.svg'
import './Home.scss';

export const Home = () => {
  const [mode, setMode] = useState(localStorage.getItem('mode'));
  const [inputData, setInputData] = useState({ 'search_user': '' })
  const [userData, setUserData] = useState({})
  const [userRepos, setUserRepos] = useState([])
  const [repoPage, setRepoPage] = useState(1)

  const toggleMode = () => {
    const actualState = mode === 'dark' ? 'light' : 'dark'
    localStorage.setItem('mode', actualState);
    setMode(actualState);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value
    })
  };

  const getUserData = () => {
    // axios.get('https://api.github.com/users/florinpop17').then(response => {
    axios.get(`https://api.github.com/users/${inputData.search_user}`).then(response => {
      console.log(response.data);
      setUserData(response.data);
    })
  };

  const loadRepositories = () => {
    // axios.get(`https://api.github.com/users/${inputData.search_user}/repos?page=${repoPage}&per_page=5`).then(response => {
    axios.get(`https://api.github.com/users/florinpop17/repos?page=${repoPage}&per_page=5`).then(response => {
      setUserRepos(userRepos.concat(response.data));
      setRepoPage(repoPage + 1);
      console.log(response.data)
    })
  };

  const handleSubmit = () => {
    getUserData();
    loadRepositories();
    setInputData({ 'search_user': '' });
  }

  return (
    <div className={`home-section ${mode}`}>
      <Header mode={mode} onClick={toggleMode} />

      <div className='content'>
        <Search onClick={handleSubmit} onChange={handleInput} />

        {/* <Card userData={userData} userRepos={userRepos} loadMoreRepos={loadRepositories} /> */}

        {Object.keys(userData).length ?
          <Card userData={userData} userRepos={userRepos} loadMoreRepos={loadRepositories} /> :
          <div className='awaiting-search-image'>
            <Image src={img} alt='search-vector-image' className='search-image' />
          </div>
        }
      </div>

      <Footer />
    </div>
  )
}