import './App.css';
import { useState } from 'react';

function App() {

  let [title, changeTitle] = useState(['여행 리뷰', '맛집 리뷰', '제품 리뷰']);


  return (
    <div className="blogApp">
     <div className='black-nav'>
      <h4>My Blog</h4>
     </div>

    <button onClick={ () => {
      let copy = [...title];
      copy[0] = '국내여행 리뷰';
      changeTitle(copy);
    }}>edit</button>

     <div className='list'>
       <h4>{title[0]}</h4>
       <p>3월 21일 발행</p>
     </div>
     <div className='list'>
       <h4>{title[1]}</h4>
       <p>3월 21일 발행</p>
     </div>
     <div className='list'>
       <h4>{title[2]}</h4>
       <p>3월 21일 발행</p>
     </div>
    </div>
  );
}

export default App;
