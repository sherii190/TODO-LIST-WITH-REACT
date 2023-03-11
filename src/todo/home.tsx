import React from 'react';
import HomeStyle from './home.style';

const Home = () => {
  return <div className={HomeStyle.todoContainer}>
    <header className={HomeStyle.headerStyle}>
      <h2>Todo List</h2>
    </header>
  </div>
};

export default Home;