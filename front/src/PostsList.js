import './Profile.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Posts() {
    const [posts, setPosts] = useState([]) ;
  
  
    useEffect(() => {
      fetch('http://localhost:8080/post')
        .then((response) => response.json())
        .then((data) => setPosts(data))
        .catch((error) => console.error('Error fetching posts:', error));
    }, []); 
  
    return (
      <div className='profile-main-div'>
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
          {posts.length < 1 ? <h1>Нет посты!</h1> : null}
        </div>
      </div>
    );
}

export default Posts;
