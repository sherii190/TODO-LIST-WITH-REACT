import React from 'react';
import HomeStyle from './home.style';
import todoString from './string.json';

const Home = () => {
  return <div className={HomeStyle.todoContainer}>
    <header className={HomeStyle.headerStyle}>
      <h2>{todoString.header}</h2>
    </header>
  </div>
};

export default Home;