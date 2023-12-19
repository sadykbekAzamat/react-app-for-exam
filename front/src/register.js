import './login.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegistration = async () => {
    try {
      const response = await fetch(`http://localhost:8080/check?username=${username}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      
  
      if (error.message.includes('404')) {
        console.log('User not found.');
  
        // Send a POST request with username and password
        try {
          const postResponse = await fetch('http://localhost:8080/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: username,
              password: password, 
            }),
          });
  
          if (!postResponse.ok) {
            throw new Error(`HTTP error! Status: ${postResponse.status}`);
          }
          else {
            localStorage.setItem('username', username);
            navigate('/');
          }
  
        } catch (postError) {
          
        }
      }
    }
  };
  
  

  return (
    <div className='main-div-login'>
      <div className='second-login-page-div'>
        <div className='action-menu'>
          <div className="top-buttons">
            <button className="not-selected-act"><Link to="/login">Войти</Link></button>
            <button className="selected-act">Зарегистрироваться</button>
          </div>

          <div className="input-fields">
            <label>Электронный почта или телефон:</label>
            <input
              type="text"
              placeholder=""
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label>Пароль:</label>
            <input type="password"
             placeholder=""
             value={password} 
             onChange={(e) => setPassword(e.target.value)}
             />
          </div>

          <button className="enter-button" onClick={handleRegistration}>
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
