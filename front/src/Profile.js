import './Profile.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('username');
    navigate('/');
  };

  useEffect(() => {
    if(localStorage.getItem('username') == "")
    {
      navigate('login');
    }
    fetch('http://localhost:8080/post/owner?owner=' + localStorage.getItem('username'))
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []); 

  return (
    <div className='profile-main-div'>
      <div className='new-profile-second-div'>
        <div className='profile-main-head'>
          <h2 className="h2-profile-text-style">Ваши объявления</h2>
          <a onClick={handleLogout} href="#" className='button-type-b'>
            Выйти из аккаунта
          </a>
        </div>
      </div>
      <div className='postsSpawnPoint'>
        {posts.map((post) => (
          <div key={post.id} className='post-item'>
            <img src={post.image} className='viewImagePost' alt='Post Image' />
            <div className='text-data-post'>
                <h3>{post.title}</h3>
                <h4>Цена: {post.grade} Тг</h4>
                <h4>Категория: {post.category}</h4>
                <h4>Владелец: {post.owner}</h4>
                <h4>{post.number}</h4>
                <p>{post.info}</p>

            </div>
          </div>
        ))}
        {posts.length < 1 ? <h1>Опубликованных постов нет!</h1> : null}
      </div>
    </div>
  );
}

export default Profile;
