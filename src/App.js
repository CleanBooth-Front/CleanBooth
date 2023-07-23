import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

const Header = () =>{
  const [value,setValue] = useState(" "); 
  return(

    <header>
      <div className="header">
        <div>
        <img src = "./Rectangle 32.png" className='logo'/>
        </div>
        <div className='search'>
          <input type = "text" placeholder ="검색어를 입력해주세요" value={value}></input>
          <button type = "submit">
            <FontAwesomeIcon icon={faSearch} style={{ color: "#000000" }} /> 
          </button>
          
        </div>
        <div className='user'>
          <div button className='login'> 로그인 &nbsp; </div>   
          <span className='divider'> | &nbsp; </span>
          <div button className='sign-up'> 회원 가입 &nbsp; </div>    
          <span className='divider'>  | &nbsp; </span>
          <div button className='customer_center'> 고객 센터 </div>
        </div>
      </div>
    </header>
  );
}

const Main = () => {

  return (
    <div className="bigBox">
      <div className="gnb">
        <ul className='depth1'>
          <li>
              <a href='' className='diet2'>비건&다이어트</a>
              <ul className='depth2'>
                <div className='smallbox'>
                  <div className="message">비건&다이어트</div>
                  <li>
                  <a href=''>식물성 단백질</a>
                  <ul className='depth3'>
                    <li> <a href=''>대체육/대체 해산물</a></li>
                    <li> <a href=''>그래놀라/씨앗/견과류</a></li>
                  </ul>
                  </li>
                  <li>
                  <a href=''>면/소스/오일</a>
                    <ul className='depth3'>
                      <li><a href=''>파스타/면류</a></li>
                      <li><a href=''>소스/오일/감미료</a></li>
                      <li>밀가루/가루료</li>
                    </ul>  
                  </li>
                  <li>
                  <a href=''>과자/간식/음료</a>
                  <ul className='depth3'> 
                    <li><a href=''>과자,스낵,쿠키</a></li>
                    <li><a href=''>젤리/아이스크림</a></li>
                    <li><a href=''>유제품/음료</a></li>
                  </ul>
                </li>
                <li>
                  <a href=''>베이커리/빵류</a>
                </li>
                <li>
                  <a href=''>건강기능식품/보조제</a>
                </li>
              </div>
            </ul>
          </li>
          <li>
            <a href='' className='nutritionSearch'>영양성분 검색</a>
            <ul className='depth2'>
              <div className='smallbox'>
                <div className='message'>영양성분 검색</div>
                <li><a href=''>비건 성분</a>
                <ul className='depth3'>
                  <li><a href=''>식물성 단백질</a></li>
                  <li><a href=''>유제품 무첨가 Diary Free</a></li>
                  <li><a href=''>견과류 무첨가 Grain Free</a></li>
                  <li><a href=''>대두 무첨가</a></li>
                </ul>
                </li>
                <li><a href=''>다이어트 성분</a>
                <ul className='depth3'>
                  <li><a href=''>저탄수화물/고단백</a></li>
                  <li><a href=''>무설탕/Low Suger/제로슈가</a></li>
                  <li><a href=''>히브스커스</a></li>
                  <li><a href=''>카페인Free</a></li>
                </ul>
                </li>
              </div>
            </ul>
          </li>
          <li>
            <a href='' className='introduction'>클린부스 소개</a>
          </li>
          <li>
            <a href=''className='reviwer'>클린 체험단</a>
          </li>
          <li>
            <a href=''className='reciepe'>클린 레시피</a>
          </li>
        </ul>
      </div>
      <div className="image">
        <img src='./Rectangle 169.png' alt="Image" />
        <img className ='cookie_1'src='./169_1.png'></img>
        <img className='cookie_2' src='./169_2.png'></img>
        <img className='cookie_3' src='./169_3.png'></img>
      </div>
    </div>
  );
};




function App() {
  return (
    <div className="App">
      <div className='background'>
      <Header/>
      <Main/>
      </div>
    </div>

  );
}

export default App;
