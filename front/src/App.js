import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Main from './Main';
import MoreLinks from './MoreLinks';
import Login from './login';
import NewPost from './NewPost';
import Register from './register';
import Profile from './Profile';
import CategoryFilter from './CategoryFilter';
import SunSystem from './SunSystem';
import Posts from './PostsList';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="container">
          <div className="main-content">
            <Routes>

              <Route path="/" element={<>              
              <Header />
              <Main />
              <MoreLinks /></>} />

              <Route path='/new-post' element={<>              
              <Header />
              <NewPost />
              <MoreLinks /></>}/>

              <Route path='/profile' element={<>              
              <Header />
              <Profile />
              <MoreLinks /></>}/>

              <Route path='/filter-category' element={<>              
              <Header />
              <CategoryFilter />
              <MoreLinks /></>}/>

              <Route path='/list' element={<>              
              <Header />
              <Profile />
              <MoreLinks /></>}/>

              <Route path='/post' element={<>              
              <Header />
              <Posts />
              <MoreLinks /></>}/>

              <Route path='/login' element={
              <Login/>}/>

              <Route path='/register' element={
              <Register/>}/>

              <Route path='/sun' element={
              <SunSystem/>}/>

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
