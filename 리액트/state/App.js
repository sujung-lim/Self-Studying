import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, b] = useState(['여행 리뷰', '맛집 리뷰', '제품 리뷰']);


  return (
    <div className="blogApp">
     <div className='black-nav'>
      <h4>My Blog</h4>
     </div>
     <div className='list'>
       <h4>{글제목[0]}</h4>
       <p>3월 21일 발행</p>
     </div>
     <div className='list'>
       <h4>{글제목[1]}</h4>
       <p>3월 21일 발행</p>
     </div>
     <div className='list'>
       <h4>{글제목[2]}</h4>
       <p>3월 21일 발행</p>
     </div>
    </div>
  );
}

export default App;
