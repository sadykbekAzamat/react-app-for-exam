import React, { Component } from 'react';
import axios from 'axios';

const Card = ({ children }) => (
  <div className='post-item' style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
    {children}
  </div>
);

class CategoryFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.posts !== this.state.posts) {
      // Perform actions after posts are updated
      console.log('Posts have been updated:', this.state.posts);
    }
  }

  fetchData() {
    axios
      .get(`http://localhost:8080/post/category?category=${localStorage.getItem('selectedCategory')}`)
      .then((response) => this.setState({ posts: response.data }))
      .catch((error) => console.error('Error fetching posts:', error));
  }

  render() {
    const { posts } = this.state;

    return (
      <div className='profile-main-div'>
        <div className='postsSpawnPoint'>
          {posts.map((post) => (
            <Card key={post.id}>
              <img src={post.image} className='viewImagePost' alt='Post Image' />
              <div className='text-data-post'>
                <h3>{post.title}</h3>
                <h4>Цена: {post.grade} Тг</h4>
                <h4>Категория: {post.category}</h4>
                <h4>Владелец: {post.owner}</h4>
                <h4>{post.number}</h4>
                <p>{post.info}</p>
              </div>
            </Card>
          ))}
          {posts.length < 1 ? <h1>В этой категории нет публикаций!</h1> : null}
        </div>
      </div>
    );
  }
}

export default CategoryFilter;
