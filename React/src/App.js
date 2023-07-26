import './App.css';
import { useState } from 'react';

function Time() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();

  return (
    <div className="time">
      <h4>
        {year}년 {month}월 {date}일
      </h4>
    </div>
  );
}

function App() {
  /* 강의 코드
   * let [titles, setTitles] = useState(['여행 리뷰', '맛집 리뷰', '제품 리뷰']);
   * 조금 더 응용해서 사용하기 위해 객체를 이용해 아래와 같이 변형해봄
   */
  let [title, setTitle] = useState([
    { name: '여행 리뷰', likes: 0 },
    { name: '맛집 리뷰', likes: 0 },
    { name: '제품 리뷰', likes: 0 },
  ]);
  let [modal, setModal] = useState(false); // 평소에 안 보이게 하기 위해서 default값을 false로 지정
  let [modalTitle, setModalTitle] = useState(0);
  let [input, setInput] = useState('');

  const handleLike = index => {
    const updatedTitles = [...title];
    updatedTitles[index].likes += 1;
    setTitle(updatedTitles);
  };

  const addNewPost = () => {
    const copyTitle = [...title];
    const newPost = { name: input, likes: 0 }; //새로운 title 객체 생성
    if (input.trim() !== '') {
      copyTitle.push(newPost);
      setTitle(copyTitle);
      setInput('');
    }
  };

  // 글 삭제하기
  // splice 메서드를 사용한 방식
  const deletePost = indexToDelete => {
    let copyTitle = [...title];
    copyTitle.splice(indexToDelete, 1);
    setTitle(copyTitle);
  };

  /* filter 메서드를 사용한 방식(해결 못함)
   *const deletePost = indexToDelete => {
   *  const filteredTitle = title.filter(
   *    titleElement,
   *    index => index !== indexToDelete
   *  );
   *  setTitle(filteredTitle);
   * };
   */

  /* slice 메서드를 사용한 방식
   * const deletePost = indexToDelete => {
   * const newTitle = title
   *   .slice(0, indexToDelete)
   *   .concat(title.slice(indexToDelete + 1)); //삭제하려는 인덱스 바로 다음 인덱스부터 배열의 끝까지의 원소를 가져옴
   * setTitle(newTitle);
   * };
   */

  return (
    <div className="blogApp">
      <div className="black-nav">
        <h1>My Blog</h1>
        <Time></Time>
      </div>
      <button
        onClick={() => {
          let copyAbc = [...title];
          copyAbc.sort((a, b) => a.name.localeCompare(b.name));
          setTitle(copyAbc);
        }}
      >
        글자순 정렬
      </button>
      <button
        onClick={() => {
          const updatedTitles = [...title];
          updatedTitles[0].name = '국내여행 리뷰';
          setTitle(updatedTitles);
        }}
      >
        edit
      </button>
      {title.map((title, index) => (
        <div className="list" key={index}>
          <h3
            onClick={() => {
              setModalTitle(index);
              setModal(true);
            }}
          >
            {title.name}
            {''}
            <span onClick={() => handleLike(index)}>❤️</span> {title.likes}
          </h3>
          <p>3월 21일 발행</p>
          <button onClick={() => deletePost(index)}>삭제</button>
        </div>
      ))}
      <button
        onClick={() => {
          setModal(true);
        }}
      >
        모달 열기
      </button>
      <button
        onClick={() => {
          setModal(false);
        }}
      >
        모달 닫기
      </button>
      {modal === true ? (
        <Modal title={title} modalTitle={modalTitle} setTitle={setTitle} />
      ) : null}
      <br></br>
      <input
        onChange={e => {
          setInput(e.target.value);
        }}
        type="text"
      />
      <button onClick={addNewPost}>글 발행</button>
    </div>
  );
}

// 모달창
function Modal(props) {
  return (
    <div className="modal">
      <h3>{props.title[props.modalTitle].name}</h3>
      <p>날짜</p>
      <p>상세 내용</p>
      <button
        onClick={() => {
          const updatedTitle = [...props.title];
          updatedTitle[props.modalTitle].name = '여행지 추천';
          props.setTitle(updatedTitle);
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default App;
