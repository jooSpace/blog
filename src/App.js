import './App.css';
import { useState } from 'react';
import Modal from './component/modal';

function App() {

  let post = '강남 우동 맛집';
  let [titleId, setTitleId] = useState(0);
  let [title, setTitle] = useState(['남자 코트 추천', '여자 코트 추천', '가',]);
  let [great, setGreat] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [inputval, setInputval] = useState("");
  
  return (
    <div className="App">
      <header className="black-nav">
        <h1>blog</h1>
      </header>
      {/* <button type='button' onClick={()=> {
        let copy = [...title];
        copy[0] = '여자 코트 추천'
        setTitle(copy)
        }}>버튼</button>
      <div className="list">
        <h4>{ title[0] } <button type='button' onClick={() => {setGreat(great+1)} } >👍</button> {great} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={() => { setModal(!modal); }}>{ title[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ title[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {modal == false ? null : <Modal titleId={titleId} setTitle={setTitle} title={title}></Modal>}

      {
        title.map(function(val, i) {
          return (
            <div key={i} className='list'>
              <h4 onClick={() => {setModal(true); setTitleId(i)}}>{title[i]} 
                <span onClick={()=> {
                  let copy = [...great];
                  copy[i] = copy[i] + 1                 
                  setGreat(copy)}}
                >👍 {great[i]}</span>
              </h4>
              <p>2월 17일 발행</p>
              <button type='button' onClick={() => {
                let copy = [...title];
                copy.splice(i, 1);
                setTitle(copy);
              }}>
                삭제
              </button>
            </div>
          )
        })
      }

      <input onChange={(e)=> {
        setInputval(e.target.value);
        console.log(inputval);
        
      }}></input>
      <button type='button' onClick={() => {
        let copy = [...title]
        copy.push(inputval);
        setTitle(copy);
        console.log(title)
      }}>
        확인
      </button>
      
    </div>
  );
}

export default App;
