import './login.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleRegistration = async () => {
    try {
      const response = await fetch(`http://localhost:8080/user?username=${username}&password=${password}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      else
      {
        localStorage.setItem('username', username);

        navigate('/');
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      if (error.message.includes('404')) {
        console.log('User not found.');

      }
    }
  };


  return (
    <div className='main-div-login'>
      <div className='second-login-page-div'>
        <div className='action-menu'>
          <div className="top-buttons">
            <button className="selected-act">Войти</button>
            <button className="not-selected-act"><Link to="/register">Зарегистрироваться</Link></button>
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
            Войти
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
