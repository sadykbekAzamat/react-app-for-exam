import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './img/logo-olx.png';
import user from './img/user.png';
import heart from './img/favorite.png';
import sun from './img/sun.png';
import news from './img/megaphone.png';

function Header() {
  const storedUsername = localStorage.getItem('username');

  const profileLink = storedUsername ? '/profile' : '/login';
  const newPostLink = storedUsername ? '/new-post' : '/login';
    return (
      <header>
        <a className='main-link-img' href='/'>
          <img className="main-icon" src={logo} alt="Logo" />
        </a>

        <a href="/" className="message">
            <div class="messege-icon">
                <svg  viewBox="0 0 24 24" width="1em" height="1em" >
                    <path fill="currentColor" fill-rule="evenodd" d="M11 4.01c-3.86 0-7 3.157-7 7.038v8.426l2.553-1.283.447-.106h6c3.86 0 7-3.157 7-7.037S16.86 4.01 13 4.01h-2zM3.447 22 2 21.1V11.049C2 6.058 6.037 2 11 2h2c4.962 0 9 4.059 9 9.048s-4.038 9.047-9 9.047H7.236L3.448 22z"></path>
                </svg>
            </div>
            <span class="css-1o5oslh">Сообщения</span>
        </a>

        <a href="/" className="favorite">
         <img src={heart} alt="fav-icon" />
        </a>

        <a href="/sun" className="favorite">
         <img src={sun} alt="sun" />
        </a>

        <div className="posts-list">
            <img src={news} alt="news" />
            <Link to={'/post'}>Посты</Link>
        </div>

        <div className="profile-link">
            <img src={user} alt="user" />
            <Link to={profileLink}>Ваш профиль</Link>
        </div>
        
        <a href={newPostLink} className="button-type-a">Подать объявление</a>
      </header>
    );
  }
  
  export default Header;
  