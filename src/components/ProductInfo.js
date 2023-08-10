import React,{useState, useEffect} from "react";
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import { IoIosAddCircleOutline } from "react-icons/io";


const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1px;
  .h{
    margin: 0px auto;
    color: gray;
  }
  
`;


const Stars = styled.div`
    display: flex;
    padding-top: 0px;
    padding-bottom: 15px;
    margin: 0px auto;

    & svg {
    color: gray;
    cursor: pointer;
    }

    :hover svg {
    color: #fcc419;
    }

    & svg:hover ~ svg {
    color: gray
    }

    .yellowStar {
    color: orange;
    }
`;


const ScoreBox = styled.div`

    display: block;
    margin: 0px auto;

    .score {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: 10%;
        margin-right: 10%;
        margin-bottom: 40px;
        border: 2px solid gray;
        border-radius: 20px;
        width: 80%;
        height: 200px;
    }
    
    .score:after{
        content:"";
        diplay: block;
        clear: both;
    }

    .starscore {
        margin: 5%;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        float:left;
    }
    
    .photoreview{
        display: flex;
        flex-direction: row;
       
    }
`;

const DashedText = styled.div`
    display: block;
    margin: 0px auto;

    .dash{
        border: 1px dashed #009F50;
        flex: auto;
        
    }
    .dashedhr{
        margin-top:500px;
        display: flex;
        align-items:center;
    }
    .txt{
        padding: 30px 10px;
        font-weight: bold;
        font-size: 15pt;
    }
`

const Template = styled.div`
    display: block;
    margin: 0px auto;

    .good {
        text-align: center;
        width: 34%;
        height: 200px;
        padding: 2rem;
        float: left;
        clear: left;
        margin-left: 10%;
        display: flex;
        border: 2px solid gray;
        border-radius: 20px;
    }

    .bad {
        text-align: center;
        width: 34%;
        height: 200px;
        padding: 2rem;
        float: right;
        clear: right;
        margin-right: 10%;
        display: flex;
        border: 2px solid gray;
        border-radius: 20px;
    }
    .h3{
        margin: 0px auto;
        font-weight: bold;
        font-size: 12pt;
    }
`;

const Write=styled.div`
    border-bottom: 1px solid gray;

    .writeblock{

        display: block; 
        margin-left: 15%;
        margin-right: 10%;
        padding-top: 40px;
        text-align: right;
  
    }
    .writereview{
        margin-right:4px;
    }
    .writerecently{
        border-right:2px solid gray;
        padding-right:11px;
        margin-right:11px;
        margin-left:8px;
    }
    .writelong{
        border-right:2px solid gray;
        padding-right:11px;
        margin-right:11px;
    }
    .writebutton{
        margin-top: 20px;
        margin-bottom: 20px;
        width: 130px;
        height: 35px;
        font-size: 15px;
        color: white;
        background: green;
        border-radius:13px;
        border: 2px solid green;
    }
    
`;
const ARRAY = [0, 1, 2, 3, 4];

const ModalDesign=styled.div`
    .modal{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.6); 
    }
    .reviewmodal{
        width: 700px;
        height: 860px;
        background-color: white;
        position: relative;
        box-sizing: border-box;
        margin: 50px auto;
        padding: 20px;
        background: #fff; 
  
    }
    .modal-header{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 20px;
    }
    .centered-h2 {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .review-button{
        width: 440px;
        height: 50px;
        display: block; /* 버튼을 block 요소로 변경합니다. */
        margin: 24px auto;
        background: green;
        color: white;
        font-size: 20px;
        font-weight: bold;
        border: 2px solid green;
        border-radius: 10px;
    }

`;

const Boxexplain=styled.div`
    width: 600px;
    height: 150px;
    border: 2px solid gray;
    border-radius: 10px;
    margin: 20px auto;
    padding: 8px;
    box-sizing: border-box;
    
    .textarea-wrapper{
        position: relative;
        width: 100%;
        height: 100%;
    }
    textarea{
        resize: none;
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
    }

    p {
        position: absolute; /* Add absolute position to the <p> tag */
        bottom: -15px; /* Adjust the value to control the vertical position */
        right: 5px; /* Adjust the value to control the horizontal position */
        color: gray;
    }
`;
   
const Explain=styled.span`
   font-weight: bold;
   font-size: 18px;
   margin-right: 8px;
   margin-left: 30px;
   margin-bottom: 40px;

`;
const PhotoContainer=styled.div`
    display: inline-block;
    align-items: center;
    width: 100px;
    height: 100px;
    border: 2px solid gray;
    border-radius: 20px;
    margin-left: 30px;
    margin-right: 10px;
    margin-top: 20px;
`
const Photo=styled.div`
    display: flex;
    justify-content: center; /* 아이콘을 가로 방향으로 중앙에 위치시킴 */
    align-items: center; /* 아이콘을 세로 방향으로 중앙에 위치시킴 */
    width: 100%;
    height: 100%;
`

const ImageContaier=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border: 2px solid gray;
    border-radius: 20px;
    margin-right:10px;
    margin-top: 20px;
`
const ParentContainer=styled.div`
    display: flex;
`
const ListMap=styled.div`
    display: flex;
    margin-left: 10%;
    border-bottom: 1px solid gray;
    .textlist{
        margin-right: 160px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .listmapfirst{ 
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .reviewcontent{
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        align-items: flex-start;
    }

    .stars-container {
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        
    }

`
const AskButton=styled.button`
    align-items: center;
    border: none;
    background: white;
    width: 440px;
    height: 50px;
    display: block;
    margin: 24px auto;
    background: green;
    color: white;
    font-size: 20px;
    font-weight: bold;
    border: 2px solid green;
    border-radius: 10px;
    
`
const Contaniner=styled.div`

`
function Modal({ closeModal }){
    const [clicked, setClicked] = useState([false, false, false, false, false]);

    const handleStarClick = index => {
        let clickStates = [...clicked];
        for (let i = 0; i < 5; i++) {
        clickStates[i] = i <= index ? true : false;
        }
        setClicked(clickStates);
    };

    useEffect(() => {
        sendReview();
    }, [clicked]); //컨디마 컨디업

    const sendReview = () => {
        let score = clicked.filter(Boolean).length;
        // fetch('http://52.78.63.175:8000/movie', {
        //   method: 'POST',
        //   Headers: {
        //     Authroization: 'e7f59ef4b4900fe5aa839fcbe7c5ceb7',
        //   },
        //   body: JSON.stringify({
        //     movie_id:1
        //     star: score,
        //   }),
        // });
    };

    let [modal,setModal]=useState(false); //UI의 현재 상태 저장 //state에 따라 UI가 어떻게 보일지 작성
    
    const [inputCount, setInputCount] = useState(0);

    const onTextareaHandler = (e) => {
        setInputCount(
        e.target.value.replace(/[\0-\x7f]|([0-\u07ff]|(.))/g, "$&$1$2").length
        );
    };

    //이미지 업로드하는 부분
    let [mainImg,setMainImg] = useState("");
    const setPreviewImg = (event) => {

        var reader = new FileReader();

        reader.onload = function(event) {
            setMainImg(event.target.result);
        };

        reader.readAsDataURL(event.target.files[0]);
    }

    return(
        <ModalDesign>
        <div className="modal">
            <div className="reviewmodal">
                <div className="modal-header">
                    <span className="close" style={{color:"gray",lineHeight:"16px"}} onClick={closeModal}>X 닫기</span>
                </div>
                <h2 className="centered-h2">제품 후기 작성하기</h2>
                <Wrap>
                    <Stars>
                        {ARRAY.map((el, idx) => {
                            return (
                                <FaStar
                                key={idx}
                                size="40"
                                onClick={() => handleStarClick(el)}
                                className={clicked[el] && 'yellowStar'}
                                />
                            );
                        })}
                    </Stars>
                    <span className="h">평점을 남겨주세요</span>
                </Wrap>   
                <Explain><span>좋았던 점</span></Explain><span style={{color: "gray"}}>20자 이상</span>
                <Boxexplain>
                    <div className="textarea-wrapper">
                    <textarea onChange={onTextareaHandler} maxLength="5000" placeholder="내용을 입력하세요."></textarea>
                    <p>
                        <span>{inputCount}</span> 
                        <span>/5000 자</span>
                    </p>
                    </div>
                </Boxexplain>
                <Explain><span>아쉬웠던 점</span></Explain><span style={{color: "gray"}}>20자 이상</span>
                <Boxexplain>
                    <div className="textarea-wrapper">
                    <textarea onChange={onTextareaHandler} maxLength="5000" placeholder="내용을 입력하세요."></textarea>
                    <p>
                        <span>{inputCount}</span> 
                        <span>/5000 자</span>
                    </p>
                    </div>
                </Boxexplain>
                <Explain><span>사진</span></Explain><span style={{color: "gray", fontSize: "14px"}}>제품과 무관한 사진일 경우 후기 수정 요청을 드리거나, 관리자에 의해 삭제될 수 있습니다.</span>
                <ParentContainer>
                    <PhotoContainer><Photo>
                        <button>
                            <label htmlFor="image-upload">
                            <IoIosAddCircleOutline 
                            size="40"
                            color="gray"/></label>
                            <input type="file" id="image-upload" accept="image/*" 
                            onChange={setPreviewImg} style={{ display: "none" }}/> 
                        </button>
                        
                    </Photo></PhotoContainer>

                    <ImageContaier>
                        <img alt="메인사진" src={mainImg} style={{maxWidth:"100px"}}></img>
                    </ImageContaier>
                </ParentContainer>

                <button className="review-button">후기 등록하기</button>
                
            </div>
            {
                modal === true ? <Modal/> : null
                //삼항연산자 -> 조건문 대신 사용
            }
        </div>
        </ModalDesign>
    )
}

function Info() {
    const [clicked, setClicked] = useState([false, false, false, false, false]);

    const closeModal = () => {
        setModal(false);
    };

    const handleStarClick = index => {
        let clickStates = [...clicked];
        for (let i = 0; i < 5; i++) {
        clickStates[i] = i <= index ? true : false;
        }
        setClicked(clickStates);
    };

    useEffect(() => {
        sendReview();
    }, [clicked]); //컨디마 컨디업

    const sendReview = () => {
        let score = clicked.filter(Boolean).length;
        //클린된 횟수 사용할 변수
        // fetch('http://52.78.63.175:8000/movie', {
        //   method: 'POST',
        //   Headers: {
        //     Authroization: 'e7f59ef4b4900fe5aa839fcbe7c5ceb7',
        //   },
        //   body: JSON.stringify({
        //     movie_id:1
        //     star: score,
        //   }),
        // });
    };
    
    let [modal,setModal]=useState(false); //UI의 현재 상태 저장 //state에 따라 UI가 어떻게 보일지 작성
    
    //리뷰관련변수
    let [name,setName]=useState(['000']);
    let [age,setAge]=useState(['20']);
    let [star,setStar]=useState([]);
    //score가 저장되어야함
    let [good,setGood]=useState(['좋았던 점 내용']);
    let [bad,setBad]=useState(['아쉬웠던 점 내용']);
    let [photo,setPhoto]=useState(['메인사진']);
    //

    return (
        <Contaniner>
            <div>
                <ScoreBox>
                    <div className="score">
                        <div className="starscore">
                            <Wrap>
                            <div style={{display: "flex", justifyContent: "flex-start", marginBottom:"20px", marginTop:"-50px",fontWeight: "bold", fontSize: "12pt"}}>별점</div>
                                <Stars>
                                    {ARRAY.map((el, idx) => {
                                        return (
                                            <FaStar
                                            key={idx}
                                            size="40"
                                            onClick={() => handleStarClick(el)}
                                            className={clicked[el] && 'yellowStar'
                                            }
                                            />
                                        );
                                    })}
                                </Stars>
                            </Wrap>   
                        </div>
                        
                        <div style={{display: "flex", justifyContent: "flex-start", flexDirection: "column", marginBottom:"20px", marginTop:"10px", fontWeight: "bold", fontSize: "12pt"}}>사진 후기
                        
                            <div className="photoreview" >
                                <ImageContaier></ImageContaier>
                                <ImageContaier></ImageContaier>
                                <ImageContaier></ImageContaier>
                                <ImageContaier></ImageContaier>
                            </div>
                        </div>
                    </div>
                </ScoreBox>
                <Template>
                    <div className="container">
                        <div className="row">
                            <div className="good">
                                <div className="h3">좋았던 점</div>
                            </div>
                            <div className="bad">
                                <div className="h3">아쉬웠던 점</div>
                            </div>
                        </div>
                    </div>
                </Template>

                <Write>

                    <div className="writeblock">
                        <span className="writereview" onClick={()=>{setModal(true)}}>
                            <button className="writebutton">후기 작성하기</button>
                        </span>
                        <span className="writerecently">최신순</span>
                        <span className="writelong">오래된순</span>
                        <span className="writemyreview">내가 쓴 리뷰보기</span>
                    </div>
                    
                </Write>
                {
                    
                    modal === true && <Modal closeModal={closeModal} />
                }

                {
                    name.map(function(a,i){
                        return(
                            
                            <ListMap>
                                <div className="list" key={i}>
                                    <div className="textlist">
                                        <div>{name[i]}님의 후기</div>
                                        <div>{age[i]}대</div>
                                    </div>

                                    <span>{star[i]}</span>

                                    <div className="listmapfirst">

                                        <div className="stars-container">
                                            <Stars>
                                                {ARRAY.map((el, idx) => {
                                                    return (
                                                        <FaStar
                                                        key={idx}
                                                        size="40"
                                                        onClick={() => handleStarClick(el)}
                                                        className={clicked[el] && 'yellowStar'}
                                                        />
                                                    );
                                                })}
                                            </Stars>
                                        </div>

                                        <div className="reviewcontent">
                                            <div style={{fontWeight: "bold", fontSize: "12pt"}}>좋았던 점</div> 
                                            <div>{good[i]}</div>
                                            <div style={{fontWeight: "bold", fontSize: "12pt"}}>아쉬웠던 점</div> 
                                            <div>{bad[i]}</div> 
                                            <ImageContaier><span>{photo[i]}</span></ImageContaier>
                                            <div style={{marginTop:'20px', color:'gray', fontSize:'15px'}}>리뷰발행날짜</div>
                                        </div>
                                    </div>


                                </div>
                            </ListMap>
                        )

                    })
                }

                <DashedText>
                    <div class='dashedhr'>
                        <hr className='dash'/>
                        <span class='txt'>문의 하기</span>
                        <hr className='dash'/>
                    </div>
                </DashedText>
                <AskButton onClick={()=>{}}>제품에 대해 1:1 문의하러 가기</AskButton>
            </div>
        </Contaniner>
    );
}

export default Info;