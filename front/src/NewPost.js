import './NewPost.css';
import React,  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NewPost() {

    const [title, setTite] = useState('');
    const [grade, setGrade] = useState('');
    const [info, setInfo] = useState('');
    const [category, setCategory] = useState('');
    const [number, setNumber] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    const handlePost = async () => {
        if(title != null &&
            grade != null &&
            info != null &&
            category != "" &&
            number != null &&
            image != null)

            try {
                const postResponse = await fetch('http://localhost:8080/post', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    title: title,
                    grade: grade,
                    image: image,
                    info: info,
                    number:number,
                    owner:localStorage.getItem('username'),
                    category: category,
                  }),
                });
        
                if (!postResponse.ok) {
                    alert(`HTTP error! Status: ${postResponse.status}`);
                }
                else {
                  alert(`Post published - ${title}`);                   
                  navigate('/');
                }
        
              } catch (postError) {
                
              }
    }

    return (
        <div className='new-post-main-div'>
            <div className='new-post-second-div'>
                <div>
                    <h2 class="h2-text-style">Создать объявление</h2>
                </div>
                <div className='white-div'>
                    <div className='element-in-white-div'>
                        <h4 class="h4-text-style">Опишите в подробностях</h4>
                        <div className="input-fields-new-post">
                            <label>Укажите название*</label>
                            <input type="text" value={title} onChange={(e) => setTite(e.target.value)} placeholder="" />
                        </div>

                        <div className="input-fields-new-post">
                            <label>Укажите цену*</label>
                            <input type="number" value={grade} onChange={(e) => setGrade(e.target.value)} placeholder="" />
                        </div>

                        <div className="input-description-new-post">
                            <label>Описание*</label>
                            <textarea value={info} onChange={(e) => setInfo(e.target.value)} type="email" className='inputTextArea' placeholder="Максимум символ: 1000" rows="8"/>
                        </div>

                        <div className="input-fields-new-post">
                            <label>Ссылка на фото*</label>
                            <input value={image} onChange={(e) => setImage(e.target.value)} type="text" placeholder="" />
                        </div>

                        <div className='select-category-div'>

                            <label htmlFor="category">Категория*</label>
                            <select value={category} onChange={(e) => setCategory(e.target.value)} className="select-category" id="category">
                                <option value="">Выберите категорию</option>
                                <option value="constructionAndRepair">Строительство и ремонт</option>
                                <option value="rentalAndLeasing">Аренда и прокат товаров</option>
                                <option value="realEstate">Недвижимость</option>
                                <option value="electronics">Электроника</option>
                                <option value="homeAndGarden">Дом и сад</option>
                                <option value="jobs">Работа</option>
                                <option value="fashionAndStyle">Мода и стиль</option>
                                <option value="babyAndKids">Детский мир</option>
                                <option value="hobbiesAndSports">Хобби, спорт</option>
                                <option value="transport">Транспорт</option>
                                <option value="pets">Животные</option>
                                <option value="giveaway">Отдам даром</option>
                                <option value="toys">Игрушки</option>
                                <option value="gamingConsoles">Игровые приставки</option>
                                <option value="heaters">Обогреватели</option>
                                <option value="onlineLoan">Онлайн заём</option>
                                <option value="skiingSnowboarding">Лыжи / сноуборды</option>
                                <option value="boardGames">Настольные игры</option>
                                <option value="onlineLoanKMF">Онлайн заём от KMF</option>
                                <option value="heating">Отопление</option>
                                <option value="tiresAndWheels">Шины и диски</option>
                                <option value="smartWatches">Смарт часы</option>
                                <option value="upperClothing">Верхняя одежда</option>
                                <option value="services">Услуги</option>
                            </select>
                        </div>

                        <h4 class="h4-text-style">Контактная информация</h4>

                        <div className="input-fields-new-post">
                            <label>Номер телефона*</label>
                            <input value={number} onChange={(e) => setNumber(e.target.value)} type="number" placeholder="" />
                        </div>
                    </div>
                </div>
            </div>
                <a  href="#" onClick={handlePost} className='button-type-c'>Опубликовать</a>
        </div>
    );
  }
  
  export default NewPost;
  