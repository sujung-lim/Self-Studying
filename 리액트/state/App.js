import './App.css';
import { useState } from 'react';

function Time() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth()+1;
  const date = today.getDate();

  return (
    <div className='time'>
      <h4>{year}년 {month}월 {date}일</h4>
    </div>
  )
}

function Modal() {
  return (
    <div className='modal'>
    <h3>제목</h3>
    <p>날짜</p>
    <p>상세 내용</p>
  </div>
  )
}

function App() {

  let [title, setTitle] = useState([
    { name: '여행 리뷰', likes: 0},
    { name: '맛집 리뷰', likes: 0},
    { name: '제품 리뷰', likes: 0}
  ]);

  let [modal, setModal] = useState(false);
  // 평소에 안 보이게 하기 위해서 default값을 false로 지정

  const handleLike = (index) => {
    const updatedTitles = [...title];
    updatedTitles[index].likes += 1;
    setTitle(updatedTitles);
  }

  return (
    <div className="blogApp">
     <div className='black-nav'>
      <h1>My Blog</h1>
      <Time></Time>
     </div>

    <button onClick={ () => {
      let copyAbc = [...title];
      copyAbc.sort();
      setTitle(copyAbc);
    }}>글자순 정렬</button>

    <button onClick={ () => {
      const updatedTitles = [...title];
      updatedTitles[0].name = '국내여행 리뷰';
      setTitle(updatedTitles);
    }}>edit</button>

    {title.map((title, index) => (
      <div className='list' key={index}>
        <h3>
          {title.name}{''}
          <span onClick={()=>handleLike(index)}>❤️</span> {title.likes}
        </h3>
        <p>3월 21일 발행</p>
      </div>
    ))}

     {/* <div className='list'>
       <h3>{title[0]} <span onClick={ ()=>{setLike(like+1)} } >❤️</span> {like} </h3>
       <p>3월 21일 발행</p>
     </div>
     <div className='list'>
       <h3>{title[1]} <span onClick={ ()=>{setLike(like+1)} } >❤️</span> {like} </h3>
       <p>3월 21일 발행</p>
     </div>
     <div className='list'>
       <h3 onClick={ () => setModal(!modal)}>{title[2]} <span onClick={ ()=>{setLike(like+1)} } >❤️</span> {like} </h3> */}
       {/* !
       logical NOT operator
       !modal의 의미는 현재 modal값의 반대라는 의미이다  */}
       {/* <p>3월 21일 발행</p>
     </div> */}
     
     {
       modal == true ? <Modal/> : null
     }

    </div>
    
  );
}


export default App;
