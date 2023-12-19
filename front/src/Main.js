import './Main.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './img/blue-black-icon.png';
import search from './img/search.png';
import item1 from './iconService/1.png';
import item2 from './iconService/2.png';
import item3 from './iconService/3.png';
import item4 from './iconService/4.png';
import item5 from './iconService/5.png';
import item6 from './iconService/6.png';
import item7 from './iconService/7.png';
import item8 from './iconService/8.png';
import item9 from './iconService/9.png';
import item10 from './iconService/10.png';
import item11 from './iconService/11.png';
import item12 from './iconService/12.png';
import item13 from './iconService/13.png';
import item14 from './iconService/14.png';
import item15 from './iconService/15.jpeg';
import item16 from './iconService/16.png';
import item17 from './iconService/17.png';
import item18 from './iconService/18.png';
import item19 from './iconService/19.png';
import item20 from './iconService/20.png';
import item21 from './iconService/21.png';
import item22 from './iconService/22.png';
import item23 from './iconService/23.png';
import item24 from './iconService/24.png';
import insta from './img/instagram.png';
import facebook from './img/facebook.png';
import youtube from './img/youtube.png';

function Main() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [isVisible, setIsVisible] = useState(true);
    
    const [posts, setPosts] = useState([]);

    const FindByCategory = async (selectedCategory) => {
        localStorage.setItem('selectedCategory', selectedCategory);
        navigate('/filter-category')
    };

    const handleGetByTitle = async () => {

        if(title != "")
        {            
          VisibleFalse();
        }
        else 
        {
            VisibleTrue();
        }
        fetch('http://localhost:8080/post/title?title=' + title)
          .then((response) => response.json())
          .then((data) => setPosts(data))
          .catch((error) => console.error('Error fetching posts:', error));
    }
    const VisibleTrue = () => {
        setIsVisible(true);
      };
    const VisibleFalse = () => {
        setIsVisible(false);
      };
      
      const handleKeyDown = (e) => {
        // Check if the pressed key is "/"
        if (e.key === '/') {
          e.preventDefault(); // Prevent "/" from being typed in the input
          document.getElementById('search').focus(); // Focus on the search input
        }
      };
    return (
        <div id="root" onKeyDown={handleKeyDown} tabIndex="0">
                <div className="search-piece"  >
                    <div className="form-search">
                        <input 
                        autocomplete="off" 
                        className="enter-search-text" 
                        type="text" 
                        id="search"  
                        placeholder="Что ищете?" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} ></input>
                        <a href="#" onClick={handleGetByTitle}>                            
                            <span class="span-search-button">Поиск</span>
                            <img className="search-icon" src={search} alt="search-icon" />
                        </a>
                    </div>
                </div>
                {isVisible && (
                <div className="services">
                    <h1>Разделы на сервисе OLX</h1>
                    <div className="services-list">
                        
                        <a href='#' onClick={() => FindByCategory("services")}>
                        <div className="item-service">
                            <img className="img-yellow" src={item1} alt="icon" />
                            <h4>Услуги</h4>
                        </div></a>
                        <a href='#' onClick={() => FindByCategory("constructionAndRepair")}>
                        <div className="item-service">
                            <img className="img-blue" src={item2} alt="icon" />
                            <h4>Строительство и ремонт</h4>
                        </div></a>
                        <a href='#' onClick={() => FindByCategory("rentalAndLeasing")}>
                        <div className="item-service">
                            <img className="img-white-blue" src={item3} alt="icon" />
                            <h4>Аренда и прокат товаров</h4>
                        </div></a>
                        <a href='#' onClick={() => FindByCategory("realEstate")}>
                        <div className="item-service">
                            <img className="img-red" src={item4} alt="icon" />
                            <h4>Недвижимость</h4>
                        </div></a>
                        <a href='#' onClick={() => FindByCategory("electronics")}>
                        <div className="item-service">
                            <img className="img-white-yellow" src={item5} alt="icon" />
                            <h4>Электроника</h4>
                        </div></a>
                        <a href='#' onClick={() => FindByCategory("homeAndGarden")}>
                        <div className="item-service">
                            <img className="img-gray" src={item6} alt="icon" />
                            <h4>Дом и сад</h4>
                        </div></a>
                        <a href='#' onClick={() => FindByCategory("jobs")}>
                        <div className="item-service">
                            <img className="img-white-blue" src={item7} alt="icon" />
                            <h4>Работа</h4>
                        </div></a>
                        <a href='#' onClick={() => FindByCategory("fashionAndStyle")}>
                        <div className="item-service">
                            <img className="img-pink" src={item8} alt="icon" />
                            <h4>Мода и стиль</h4>
                        </div></a>
                        <a href='#' onClick={() => FindByCategory("babyAndKids")}>
                        <div className="item-service">
                            <img className="img-yellow" src={item9} alt="icon" />
                            <h4>Детский мир</h4>
                        </div></a>
                        <a href='#' onClick={() => FindByCategory("hobbiesAndSports")}>
                        <div className="item-service">
                            <img className="img-gray" src={item10} alt="icon" />
                            <h4>Хобби, спорт</h4>
                        </div></a>
                        <a href='#' onClick={() => FindByCategory("transport")}>
                        <div className="item-service">
                            <img className="img-white-blue" src={item11} alt="icon" />
                            <h4>Транспорт</h4>
                        </div></a>
                        <a href='#' onClick={() => FindByCategory("pets")}>
                        <div className="item-service">
                            <img className="img-pink" src={item12} alt="icon" />
                            <h4>Животные</h4>
                        </div></a>
                        <a href='#' onClick={() => FindByCategory("giveaway")}>
                        <div className="item-service">
                            <img className="img-white-yellow" src={item13} alt="icon" />
                            <h4>Отдам даром</h4>
                        </div></a>
                        <a href='#' onClick={() => FindByCategory("toys")}>
                        <div className="item-service">
                            <img className="img-blue" src={item14} alt="icon" />
                            <h4>Игрушки</h4>
                        </div></a>
                        <a href='#' onClick={() => FindByCategory("gamingConsoles")}>
                        <div className="item-service">
                            <img className="img-black-blue" src={item15} alt="icon" />
                            <h4>Игровые приставки</h4>
                        </div></a>
                        <a href='#' onClick={() => FindByCategory("heaters")}>
                        <div className="item-service">
                            <img className="img-red" src={item16} alt="icon" />
                            <h4>Обогреватели</h4>
                        </div></a>
                        <a href='#' onClick={() => FindByCategory("onlineLoan")}>
                        <div className="item-service">
                            <img className="img-white-yellow" src={item17} alt="icon" />
                            <h4>Онлайн заём</h4>
                        </div></a>
                        <a href='#' onClick={() => FindByCategory("skiingSnowboarding")}>
                        <div className="item-service">
                            <img className="img-gray" src={item18} alt="icon" />
                            <h4>Лыжи / сноуборды</h4>
                        </div></a>
                        <a href='#' onClick={() => FindByCategory("boardGames")}>
                        <div className="item-service">
                            <img className="img-white-blue" src={item19} alt="icon" />
                            <h4>Настольные игры</h4>
                        </div></a>
                        <a href='#' onClick={() => FindByCategory("onlineLoanKMF")}>
                        <div className="item-service">
                            <img className="img-pink" src={item20} alt="icon" />
                            <h4>Онлайн заём от KMF</h4>
                        </div></a>
                        <a href='#' onClick={() => FindByCategory("heating")}>
                        <div className="item-service">
                            <img className="img-yellow" src={item21} alt="icon" />
                            <h4>Отопление</h4>
                        </div></a>
                        <a href='#' onClick={() => FindByCategory("tiresAndWheels")}>
                        <div className="item-service">
                            <img className="img-blue" src={item22} alt="icon" />
                            <h4>Шины и диски</h4>
                        </div></a>
                        <a href='#' onClick={() => FindByCategory("smartWatches")}>
                        <div className="item-service">
                            <img className="img-white-blue" src={item23} alt="icon" />
                            <h4>Смарт часы</h4>
                        </div></a>
                        <a href='#' onClick={() => FindByCategory("upperClothing")}>
                        <div className="item-service">
                            <img className="img-yellow" src={item24} alt="icon" />
                            <h4>Верхняя одежда</h4>
                        </div></a>
                    </div>
                </div>)}
                
                {!isVisible && (
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
                        {posts.length < 1 ? <h1>Не Найдено!</h1> : null}
                    </div>)}
                <div className="about-us">
                    <div>
                        <img className="main-icon" src={logo} alt="Logo" />
                    </div>
                    <span>Крупнейший онлайн-сервис объявлений Казахстана</span>
                    <span>Все онлайн-объявления Казахстана на OLX - здесь вы найдете то, что искали! Нажав на кнопку "Подать объявление", вы сможете разместить объявление на любую тематику легко и быстро.</span>
                    <span>С помощью сервиса OLX вы сможете купить или продать из рук в руки практически все, что угодно.</span>
                    <div className="links">
                        <span>Сообщества OLX.kz в социальных сетях:</span>
                        <div className="list-links">
                            <a href="https://www.facebook.com/OLX-%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD-1561866687362760">
                                <img className="link-icon" src={facebook} alt="Logo" />
                            </a>
                            <a href="https://www.instagram.com/olx.kz">
                                <img className="link-icon" src={insta} alt="Logo" />
                            </a>
                            <a href="https://www.youtube.com/channel/UCae4JdFJQAGB2874BkSYDYA">
                                <img className="link-icon" src={youtube} alt="Logo" />
                            </a>
                        </div>
                    </div>
                </div>                
        </div>
    );
  }
  
  export default Main;
  