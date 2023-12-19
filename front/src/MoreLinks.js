import './MoreLinks.css';
import React from 'react';
import { Link } from 'react-router-dom';
import appStore from './img/app-store.png';
import playStore from './img/play-store.png';

function MoreLinks() {
    return (
      <div className='root'>
        <div className='list-links-ss'>
            <ul className='text-links-list'>
                <li><a className='text-link' href='/'>Мобильные приложения</a></li>
                <li><a className='text-link' href='/'>Помощь и Обратная связь</a></li>
                <li><a className='text-link' href='/'>Платные услуги</a></li>
                <li><a className='text-link' href='/'>Бизнес на OLX</a></li>
                <li><a className='text-link' href='/'>Блог OLX</a></li>
                <li><a className='text-link' href='/'>Условия использования</a></li>
                <li><a className='text-link' href='/'>Политика конфиденциальности</a></li>
                <li><a className='text-link' href='/'>Реклама на сайте</a></li>
            </ul>
            <ul className='text-links-list'>
                <li><a className='text-link' href='/'>Как продавать и покупать?</a></li>
                <li><a className='text-link' href='/'>Правила безопасности</a></li>
                <li><a className='text-link' href='/'>Карта сайта</a></li>
                <li><a className='text-link' href='/'>Карта регионов</a></li>
                <li><a className='text-link' href='/'>Популярные запросы</a></li>
                <li><a className='text-link' href='/'>Работа в OLX</a></li>
            </ul>
            <div>
                <div className='list-download-app-image'>
                    <a href='https://play.google.com/store/apps/details?id=kz.slando&referrer=utm_source%3Dolx.kz%26utm_medium%3Dcpc%26utm_campaign%3Dandroid-app-footer'><img className="link-download" src={playStore} alt="Logo" /></a>
                    <a href='https://itunes.apple.com/kz/app/olx.kz-besplatnye-ob-avlenia/id663699492?l=pl&ls=1&mt=8'><img className="link-download" src={appStore} alt="Logo" /></a>
                </div>
                <p class="mini-text">Бесплатное приложение для твоего телефона</p>
            </div>
        </div>
      </div>
    );
  }
  
  export default MoreLinks;
  