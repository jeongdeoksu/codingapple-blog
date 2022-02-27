import React, { useState } from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['강남 냉면 맛집', '종로 냉면 맛집', '의정부 냉면 맛집']);

  return (
    <div className="App">
      <div className='black-nav'>개발 Blog</div>
      <div className='list'>
        <h3>{ 글제목[0] }</h3>
        <p>2월 17일</p>
        <hr/>
      </div>
      <div className='list'>
        <h3>{ 글제목[1] }</h3>
        <p>2월 17일</p>
        <hr/>
      </div>
      <div className='list'>
        <h3>{ 글제목[2] }</h3>
        <p>2월 17일</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
