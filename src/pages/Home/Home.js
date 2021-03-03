import React, { useState } from 'react';

import axios from 'axios';

import img from '../../assets/images/search.svg'
import './Home.scss';

import { Card } from '../../components/Card/Card';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { Search } from '../../components/Search/Search';
import { Image } from '../../components/Image/Image';
import { GetUser } from '../../components/ErrorBoundaries/GetUser/GetUser';
import { LoadRepos } from '../../components/ErrorBoundaries/LoadRepos/LoadRepos';
import { Unauthorized } from '../../components/ErrorBoundaries/Unauthorized/Unauthorized';
import { closePopUp } from '../../helpers/closePopUp';

export const Home = () => {
  const [mode, setMode] = useState(localStorage.getItem('mode'));
  const [inputData, setInputData] = useState({ 'search_user': '' })
  const [userData, setUserData] = useState({})
  const [userRepos, setUserRepos] = useState([])
  const [repoPage, setRepoPage] = useState(1)

  const [getUserError, setGetUserError] = useState(false);
  const [loadUserRepos, setLoadUserRepos] = useState(false);
  const [unauthorizedAccess, setUnauthorizedAccess] = useState(false);

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

  const loadRepositories = () => {
    axios.get(`https://api.github.com/users/${inputData.search_user}/repos?page=${repoPage}&per_page=5`).then(response => {
      if (response.data.length > 0) {
        setUserRepos(userRepos.concat(response.data));
        setRepoPage(repoPage + 1);
      } else {
        setLoadUserRepos(true);
      }
    }).catch(error => {
      error.response.status === 403 ? setUnauthorizedAccess(true) : setLoadUserRepos(true);
    })
  };

  const getUserData = () => {
    axios.get(`https://api.github.com/users/${inputData.search_user}`).then(response => {
      setUserData(response.data);
    }).catch(error => {
      error.response.status === 403 ? setUnauthorizedAccess(true) : setGetUserError(true);
    })
  };

  const handleSubmit = () => {
    getUserData();
  }

  return (
    <div className={`home-section ${mode}`}>
      <Header mode={mode} onClick={toggleMode} />

      <div className='content'>
        {getUserError && <GetUser closePopUp={() => closePopUp(setGetUserError)} />}
        {loadUserRepos && <LoadRepos closePopUp={() => closePopUp(setLoadUserRepos)} />}
        {unauthorizedAccess && <Unauthorized closePopUp={() => closePopUp(setUnauthorizedAccess)} />}

        <Search onClick={handleSubmit} onChange={handleInput} />

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