import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./Main.css";
import Nav from "react-bootstrap/Nav";
import List from "./list"

import React, { useState, useEffect } from "react";


import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';




const Main = () => {
    // b-right-page변경하기위해 기본 스테이트
    let [탭, 탭변경] = useState(0);

    //클린체험단 스테이트
    let [tab, Settab] = useState(0);

    //찜한 상품들
    const [products, setProducts] = useState([
        { id: 1, brand: "브랜드명 1", name: "제품명 1", deleted: false },
        { id: 2, brand: "브랜드명 2", name: "제품명 2", deleted: false },
        { id: 3, brand: "브랜드명 3", name: "제품명 3", deleted: false },
        { id: 4, brand: "브랜드명 4", name: "제품명 4", deleted: false },
        { id: 5, brand: "브랜드명 5", name: "제품명 5", deleted: false },
    ]);

    //찜한 레시피들
    const [recipes, setRecipes] = useState([
        { id: 1, name: "제품명 1", deleted: false },
        { id: 2, name: "제품명 2", deleted: false },
        { id: 3, name: "제품명 3", deleted: false },
        { id: 4, name: "제품명 4", deleted: false },
        { id: 5, name: "제품명 5", deleted: false },
    ]);

    //나의 리뷰들
    // const [myreviews, setMyrevies] = useState([
    //     { id: 1, name: "제품명 1", deleted: false },
    //     { id: 2, name: "제품명 2", deleted: false },
    //     { id: 3, name: "제품명 3", deleted: false },
    // ]);

    // 찜한상품 n개에서 n의 숫자
    const [remainingProducts, setRemainingProducts] = useState(products.length);
    const [remainingRecipes, setRemainingRecipes] = useState(recipes.length);
    // const [remainingReviews, setRemainingReviews] = useState(myreviews.length);

    // 찜한 상품 삭제하기 버튼
    const handleDelete0 = (productId) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === productId ? { ...product, deleted: true } : product
            )
        );

        setRemainingProducts((prevCount) => prevCount - 1);
    };

    //찜한 레시피 삭제하기 버튼
    const handleDelete1 = (recipeId) => {
        setRecipes((prevRecipes) =>
            prevRecipes.map((recipe) =>
                recipe.id === recipeId ? { ...recipe, deleted: true } : recipe
            )
        );

        setRemainingRecipes((prevCount) => prevCount - 1);
    };
    //나의 리뷰 삭제하기 버튼
    // const handleDelete2 = (myreviewId) => {
    //     setMyrevies((prevMyreviews) =>
    //         prevMyreviews.map((myreview) =>
    //             myreview.id === myreviewId ? { ...myreview, deleted: true } : myreview
    //         )
    //     );



    //     setRemainingReviews((prevCount) => prevCount - 1);
    // };


    // //수정하기 버튼
    // const [showEditPopup, setShowEditPopup] = useState(false);

    //모달창(수정하기 버튼)
    // let [modal, setModal] = useState(false);
    // //모달 내부 별
    // const [inputCount, setInputCount] = useState(0);
    // const onTextareaHandler = (e) => {
    //     setInputCount(
    //         e.target.value.replace(/[\0-\x7f]|([0-\u07ff]|(.))/g, "$&$1$2").length
    //     );
    // };
    // const [clicked, setClicked] = useState([false, false, false, false, false]);

    // const handleStarClick = index => {
    //     let clickStates = [...clicked];
    //     for (let i = 0; i < 5; i++) {
    //         clickStates[i] = i <= index ? true : false;
    //     }
    //     setClicked(clickStates);
    // };

    // useEffect(() => {
    //     sendReview();
    // }, [clicked]); //컨디마 컨디업

    // const sendReview = () => {
    //     let score = clicked.filter(Boolean).length;
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
    // };
    //이미지 업로드하는 부분
    // let [mainImg, setMainImg] = useState("");
    // const setPreviewImg = (event) => {

    //     var reader = new FileReader();

    //     reader.onload = function (event) {
    //         setMainImg(event.target.result);
    //     };

    //     reader.readAsDataURL(event.target.files[0]);
    // }






    return (
        <div className="App">
            <div className="bottompage">
                <List />
                <div className="middle-part">
                    <div className="b-left-page">
                        <p className="my-page">마이 페이지 <FontAwesomeIcon icon={faPencilAlt} /></p>

                        <Nav defaultActiveKey="/link-0" className="flex-column">
                            <Nav.Link
                                onClick={() => {
                                    탭변경(0);
                                }}
                                eventKey="link-0"
                                className={탭 === 0 ? "selected" : ""}
                            >
                                찜한 상품
                            </Nav.Link>
                            <Nav.Link
                                onClick={() => {
                                    탭변경(1);
                                }}
                                eventKey="link-1"
                                className={탭 === 1 ? "selected" : ""}
                            >
                                찜한 레시피
                            </Nav.Link>
                            <Nav.Link
                                onClick={() => {
                                    탭변경(2);
                                }}
                                eventKey="link-2"
                                className={탭 === 2 ? "selected" : ""}
                            >
                                클린 체험단{" "}
                            </Nav.Link>
                            <Nav.Link
                                onClick={() => {
                                    탭변경(3);
                                }}
                                eventKey="link-3"
                                className={탭 === 3 ? "selected" : ""}
                            >
                                내가 쓴 후기
                            </Nav.Link>
                            <Nav.Link
                                onClick={() => {
                                    탭변경(4);
                                }}
                                eventKey="link-4"
                                className={탭 === 4 ? "selected" : ""}
                            >
                                문의하기
                            </Nav.Link>
                            <Nav.Link
                                onClick={() => {
                                    탭변경(5);
                                }}
                                eventKey="link-5"
                                className={탭 === 5 ? "selected" : ""}
                            >
                                서비스 이용 약관
                            </Nav.Link>
                            <Nav.Link
                                onClick={() => {
                                    탭변경(6);
                                }}
                                eventKey="link-6"
                                className={탭 === 6 ? "selected" : ""}
                            >
                                개인정보처리 방침
                            </Nav.Link>
                            <Nav.Link
                                onClick={() => {
                                    탭변경(7);
                                }}
                                eventKey="link-7"
                                className={탭 === 7 ? "selected" : ""}
                            >
                                계정 관리
                            </Nav.Link>
                        </Nav>
                    </div>


                    <div className="b-right-page">
                        <TabContent
                            탭={탭}
                            products={products}
                            recipes={recipes}
                            // myreviews={myreviews}
                            handleDelete0={handleDelete0}
                            handleDelete1={handleDelete1}
                            // handleDelete2={handleDelete2}

                            // showEditPopup={showEditPopup}
                            // setShowEditPopup={setShowEditPopup}
                        />
                    </div>
                </div>
            </div>
            {/* <ModalDesign>                                                                                                                                           
                <div className="modal">
                    <div className="reviewmodal">
                        <div className="modal-header">
                            <span className="close" style={{ color: "gray", lineHeight: "16px" }} onClick={closeModal}>X 닫기</span>
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
                        <Explain><span>좋았던 점</span></Explain><span style={{ color: "gray" }}>20자 이상</span>
                        <Boxexplain>
                            <div className="textarea-wrapper">
                                <textarea onChange={onTextareaHandler} maxLength="5000" placeholder="내용을 입력하세요."></textarea>
                                <p>
                                    <span>{inputCount}</span>
                                    <span>/5000 자</span>
                                </p>
                            </div>
                        </Boxexplain>
                        <Explain><span>아쉬웠던 점</span></Explain><span style={{ color: "gray" }}>20자 이상</span>
                        <Boxexplain>
                            <div className="textarea-wrapper">
                                <textarea onChange={onTextareaHandler} maxLength="5000" placeholder="내용을 입력하세요."></textarea>
                                <p>
                                    <span>{inputCount}</span>
                                    <span>/5000 자</span>
                                </p>
                            </div>
                        </Boxexplain>
                        <Explain><span>사진</span></Explain><span style={{ color: "gray", fontSize: "14px" }}>제품과 무관한 사진일 경우 후기 수정 요청을 드리거나, 관리자에 의해 삭제될 수 있습니다.</span>
                        <ParentContainer>
                            <PhotoContainer><Photo>
                                <button>
                                    <label htmlFor="image-upload">
                                        <IoIosAddCircleOutline
                                            size="40"
                                            color="gray" /></label>
                                    <input type="file" id="image-upload" accept="image/*"
                                        onChange={setPreviewImg} style={{ display: "none" }} />
                                </button>

                            </Photo></PhotoContainer>

                            <ImageContaier>
                                <img alt="메인사진" src={mainImg} style={{ maxWidth: "100px" }}></img>
                            </ImageContaier>
                        </ParentContainer>

                        <button className="review-button">후기 등록하기</button>

                    </div>
                    {
                        modal === true ? <Modal /> : null
                        //삼항연산자 -> 조건문 대신 사용
                    }
                </div>
            </ModalDesign> */}


        </div>
    );
        };
function TabContent(props) {
    if (props.탭 == 0) {
        return (
            <div>
                <div className="pre-container0">
                    <h2>
                        찜한 상품 총{" "}
                        {props.products.filter((product) => !product.deleted).length}개
                    </h2>
                    <hr />
                </div>
                <div>
                    {props.products.map(
                        (product) =>
                            !product.deleted && (
                                <div className="product" key={product.id}>
                                    <img
                                        src="jjim.jpg"
                                        alt="찜한 상품 이미지"
                                        className="jjim-product-image"
                                    />
                                    <div className="product-info">
                                        <p className="product-brand">브랜드명</p>
                                        <p className="product-name">제품명</p>
                                    </div>
                                    <button
                                        className="delete-button"
                                        onClick={() => props.handleDelete0(product.id)}
                                    >
                                        x 삭제하기
                                    </button>
                                </div>
                            )
                    )}
                </div>
            </div>
        );
    } else if (props.탭 == 1) {
        return (
            <div>
                <div className="pre-container1">
                    <h2>
                        찜한 레시피 총{" "}
                        {props.recipes.filter((recipe) => !recipe.deleted).length}개
                    </h2>
                    <hr />
                </div>
                <div>
                    {props.recipes.map(
                        (recipe) =>
                            !recipe.deleted && (
                                <div className="recipe" key={recipe.id}>
                                    <img
                                        src="jjim.jpg"
                                        alt="찜한 상품 이미지"
                                        className="jjim-product-image"
                                    />
                                    <div className="recipe-info">
                                        <p className="recipe-name">제품명</p>
                                    </div>
                                    <button
                                        className="delete-button"
                                        onClick={() => props.handleDelete1(recipe.id)}
                                    >
                                        x 삭제하기
                                    </button>
                                </div>
                            )
                    )}
                </div>
            </div>
        );
    } else if (props.탭 == 2) {
        return (
            <div>
                <div className="pre-container">
                    <h2>클린 체험단</h2>

                    <div>
                        <Nav
                            variant="pills"
                            defaultActiveKey="preuser-app"
                            className="preuser-nav"
                        >
                            <Nav.Item>
                                <Nav.Link eventKey="preuser-app" className="preuser-link">
                                    신청 내역
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="preuser-win" className="preuser-link">
                                    당첨 내역
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>

                        {/* if (props.tab ==0){
                        <div>1</div>
                    }
                    else if (props.tab == 1){
                        <div>2</div>
                    } */}
                    </div>
                </div>
            </div>
        );
    } else if (props.탭 == 3) {
        return (
            <div>
                <div className="pre-container3">
                    {/* <h2>내가 쓴 후기 총 {" "}
                        {props.myreviews.filter((myreview) => !myreview.deleted).length}개</h2>
                    <hr /> */}

                    {/* <div>
                        {props.myreviews.map(
                            (myreview) =>
                                !myreview.deleted && (
                                    <div className="myreview" key={myreview.id}>
                                        <img
                                            src="jjim.jpg"
                                            alt="내 리뷰 이미지"
                                            className="jjim-product-image"
                                        />
                                        <div className="myreview-info">
                                            <p className="myreview-brand">브랜드명</p>
                                            <p className="myreview-name">제품명</p>
                                        </div>

                                        <button
                                            className="delete-button"
                                            onClick={() => props.handleDelete2(myreview.id)}
                                        >
                                            x 삭제하기
                                        </button>

                                        <button
                                            className="edit-button"
                                            onClick={() => { setModal(true) }} // Show the popup
                                        >
                                            <FontAwesomeIcon icon={faPencilAlt} /> 수정하기
                                        </button>
                                        {

                                            modal === true && <Modal closeModal={closeModal} />
                                        }

                                    </div>
                                )
                        )}
                    </div> */}
                </div>
            </div>
        );
    } else if (props.탭 == 4) {
        return (
            <div>
                <div className="pre-container4">
                    <h2>문의하기</h2>
                    <hr />
                </div>
            </div>
        );
    } else if (props.탭 == 5) {
        return (
            <div className="pre-container5">
                <h2>서비스 이용 약관</h2>
                <hr />
                <pre className="pre-content5">
                    아래 내용은 더미 텍스트입니다! 제1장 총칙 제1조 (목적) 본 약관은
                    클린부스㈜(이하 회사라 한다)와 교보문고 계열사가 제공하는 오프라인
                    매장 및 온라인상의 인터넷 서비스 (이하 서비스라 하며, 접속 가능한
                    유·무선 단말기의 종류와는 상관없이 이용 가능한 회사가 제공하는 모든
                    서비스를 의미합니다)를 이용함에 있어서 회사와 이용자의 권리, 의무,
                    책임 사항 및 서비스 이용절차 등에 관한 사항을 규정함을 목적으로
                    합니다. ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에
                    반하지 않는 한 이 약관을 준용합니다」 제2조 (정의) 이 약관에서
                    사용하는 용어의 정의는 다음과 같습니다. 1. 회사란 교보문고(주)를
                    의미하며, 교보문고(주)가 재화 또는 용역을 이용자에게 제공하기 위하여
                    운영하는 오프라인 매장 및 컴퓨터 등 정보통신설비(인터넷, 전화 등)를
                    이용하여 재화 또는 용역을 거래할 수 있도록 설정한 가상의 매장을 말하며
                    아울러 오프라인 매장과 사이버몰을 운영하는 사업자의 의미로도
                    사용합니다. 2. 이용자란 매장에 방문하거나 사이트에 접속하여 이 약관에
                    따라 회사가 제공하는 정보 및 기타 서비스를 제공받는 회원 및 비회원을
                    말합니다. 3. 회원이라 함은 교보북클럽 서비스 혜택적용을 위해 회사에
                    개인정보를 제공하여 회원등록을 한 자로서, 계속적으로 회사가 제공하는
                    서비스를 이용할 수 있는 자를 말하며 아래와 같이 구분될 수 있습니다. ①
                    일반회원 : 상품구매 및 구매와 관련하여 제공되는 서비스를 이용할 수
                    있는 만 14세 이상의 일반회원 ② 어린이회원 : 보호자의 동의를 얻어
                    가입한 만 14세 미만의 회원 ③ 법인회원 : 사업자 정보로 가입한 회원 ④
                    해외거주회원 : 해외거주 주소로 가입한 회원 4. 교보북클럽 서비스란
                    당사와 교보문고 계열사 및 제휴사가 회원에게 제공하는 회원등급 산정,
                    마일리지 및 통합포인트 적립, 사용, 할인, 이벤트 참여 등의 전반적인
                    고객 서비스 프로그램을 말하며 구체적인 내용은 당사와 교보문고 계열사
                    또는 제휴사와의 관계 및 당사 정책에 의해 달라질 수 있습니다. 5.
                    교보문고 계열사란 당사와 교보북클럽 서비스 운영과 관련하여 위탁 운영
                    계약을 맺고 교보북클럽 서비스를 동시 제공하는 회사를 말합니다.*
                    교보북클럽 서비스 제공사 : 교보라이프플래닛생명보험㈜ 6. 아이디(ID)라
                    함은 회원의 식별과 서비스이용을 위하여 회원이 정하고 회사가 승인하는
                    문자 또는 숫자의 조합을 의미합니다. 7. 비회원이라 함은 회원에 가입하지
                    않고 회사가 제공하는 서비스를 이용하는 자를 말합니다. 8.
                    간편가입회원이라 함은 회원가입시 본인인증(실명인증)을 받지 않고
                    필수정보만 입력하여 회사가 제공하는 서비스를 이용하는 자를 말합니다.
                    9. 비밀번호라 함은 이용자의 동일성 확인과 이용자의 권익 및 비밀보호를
                    위해 이용자 스스로가 설정하여 등록한 문자, 숫자, 특수문자의 조합을
                    의미합니다. 10. 디지털상품이라 함은 동영상, eBook, e러닝, 음원과 같이
                    VOD, 스트리밍, 다운로드 등의 형태로 제공되는 무배송 상품을 말합니다.
                    11. 게시물이라 함은 이용자가 서비스를 이용함에 있어 서비스 상에 게시한
                    부호·문자·음성·음향·화상·동영상 등 정보 형태의 글, 사진, 동영상 및
                    각종 파일과 링크 등을 의미합니다. 12. 본 조에 정의되지 않은 용어는
                    일반적인 상관례에 따릅니다.
                </pre>
            </div>
        );
    } else if (props.탭 == 6) {
        return (
            <div className="pre-container6">
                <h2>개인정보처리 방침</h2>
                <hr />
                <pre className="pre-content6">
                    아래 내용은 더미 텍스트입니다! 제1장 총칙 제1조 (목적) 본 약관은
                    클린부스㈜(이하 회사라 한다)와 교보문고 계열사가 제공하는 오프라인
                    매장 및 온라인상의 인터넷 서비스 (이하 서비스라 하며, 접속 가능한
                    유·무선 단말기의 종류와는 상관없이 이용 가능한 회사가 제공하는 모든
                    서비스를 의미합니다)를 이용함에 있어서 회사와 이용자의 권리, 의무,
                    책임 사항 및 서비스 이용절차 등에 관한 사항을 규정함을 목적으로
                    합니다. ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에
                    반하지 않는 한 이 약관을 준용합니다」 제2조 (정의) 이 약관에서
                    사용하는 용어의 정의는 다음과 같습니다. 1. 회사란 교보문고(주)를
                    의미하며, 교보문고(주)가 재화 또는 용역을 이용자에게 제공하기 위하여
                    운영하는 오프라인 매장 및 컴퓨터 등 정보통신설비(인터넷, 전화 등)를
                    이용하여 재화 또는 용역을 거래할 수 있도록 설정한 가상의 매장을 말하며
                    아울러 오프라인 매장과 사이버몰을 운영하는 사업자의 의미로도
                    사용합니다. 2. 이용자란 매장에 방문하거나 사이트에 접속하여 이 약관에
                    따라 회사가 제공하는 정보 및 기타 서비스를 제공받는 회원 및 비회원을
                    말합니다. 3. 회원이라 함은 교보북클럽 서비스 혜택적용을 위해 회사에
                    개인정보를 제공하여 회원등록을 한 자로서, 계속적으로 회사가 제공하는
                    서비스를 이용할 수 있는 자를 말하며 아래와 같이 구분될 수 있습니다. ①
                    일반회원 : 상품구매 및 구매와 관련하여 제공되는 서비스를 이용할 수
                    있는 만 14세 이상의 일반회원 ② 어린이회원 : 보호자의 동의를 얻어
                    가입한 만 14세 미만의 회원 ③ 법인회원 : 사업자 정보로 가입한 회원 ④
                    해외거주회원 : 해외거주 주소로 가입한 회원 4. 교보북클럽 서비스란
                    당사와 교보문고 계열사 및 제휴사가 회원에게 제공하는 회원등급 산정,
                    마일리지 및 통합포인트 적립, 사용, 할인, 이벤트 참여 등의 전반적인
                    고객 서비스 프로그램을 말하며 구체적인 내용은 당사와 교보문고 계열사
                    또는 제휴사와의 관계 및 당사 정책에 의해 달라질 수 있습니다. 5.
                    교보문고 계열사란 당사와 교보북클럽 서비스 운영과 관련하여 위탁 운영
                    계약을 맺고 교보북클럽 서비스를 동시 제공하는 회사를 말합니다.*
                    교보북클럽 서비스 제공사 : 교보라이프플래닛생명보험㈜ 6. 아이디(ID)라
                    함은 회원의 식별과 서비스이용을 위하여 회원이 정하고 회사가 승인하는
                    문자 또는 숫자의 조합을 의미합니다. 7. 비회원이라 함은 회원에 가입하지
                    않고 회사가 제공하는 서비스를 이용하는 자를 말합니다. 8.
                    간편가입회원이라 함은 회원가입시 본인인증(실명인증)을 받지 않고
                    필수정보만 입력하여 회사가 제공하는 서비스를 이용하는 자를 말합니다.
                    9. 비밀번호라 함은 이용자의 동일성 확인과 이용자의 권익 및 비밀보호를
                    위해 이용자 스스로가 설정하여 등록한 문자, 숫자, 특수문자의 조합을
                    의미합니다. 10. 디지털상품이라 함은 동영상, eBook, e러닝, 음원과 같이
                    VOD, 스트리밍, 다운로드 등의 형태로 제공되는 무배송 상품을 말합니다.
                    11. 게시물이라 함은 이용자가 서비스를 이용함에 있어 서비스 상에 게시한
                    부호·문자·음성·음향·화상·동영상 등 정보 형태의 글, 사진, 동영상 및
                    각종 파일과 링크 등을 의미합니다. 12. 본 조에 정의되지 않은 용어는
                    일반적인 상관례에 따릅니다.
                </pre>
            </div>
        );
    } else if (props.탭 == 7) {
        return (
            <div>
                <div className="pre-container7">
                    <h2>계정 관리</h2>
                    <hr />
                </div>
            </div>
        );
    }
}

export default Main;
