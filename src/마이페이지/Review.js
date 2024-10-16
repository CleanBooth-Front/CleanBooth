import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import EditModal from "./EditModal";
import { useState, useEffect } from "react";

function Review({ review, props }) {
  const [editmodal, setEditModal] = useState();
  const [goodcontent, setGoodContent] = useState("");
  const [missing, setMissing] = useState("");
  const [mainImg, setMainImg] = useState("");
  const [clicked, setClicked] = useState(
    useState([false, false, false, false, false])
  );
  
  const closeeditModal = () => {
    setEditModal(false);
  };

  useEffect(() => {
    sendReview();
  }, [clicked]); //컨디마 컨디업

  const sendReview = (props) => {
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

    console.log(sendReview);
  };

  return (
    <div className="review" key={review.id}>
      <div className="review-left">
        <img
          src="jjim.jpg"
          alt="내 리뷰의 상품 이미지"
          className="jjim-product-image"
        />
      </div>

      <div className="review-right">
        <div className="review-buttons">
          <button
            className="delete-button"
            onClick={() => props.handleDelete2(review.id)}
          >
            x 삭제하기
          </button>

          <button
            className="edit-button"
            onClick={() => {
              setEditModal(true);
            }} // Show the popup
          >
            <FontAwesomeIcon icon={faPencilAlt} /> 수정하기
          </button>
          {editmodal === true && (
            <EditModal
              closeeditModal={closeeditModal}
              goodcontent={goodcontent}
              setGoodContent={setGoodContent}
              missing={missing}
              setMissing={setMissing}
              mainImg={mainImg}
              setMainImg={setMainImg}
              clicked={clicked}
              setClicked={setClicked}
            />
          )}
        </div>
        <div className="review-right-1">
          <div className="review-info">
            <p className="review-brand">브랜드명</p>
            <p className="review-name">&nbsp;제품명</p>
          </div>
          <div className="star-rates"></div>
          {sendReview}
        </div>

        <div className="review-right-2">
          <div className="review-pros">
            <p className="review-pro">좋았던 점</p>
            <p className="review-p-content"> : {goodcontent}</p>
            {/* <input className="review-p-content" placeholder="내용 (10글자)"></input> */}
          </div>

          <div className="review-cons">
            <p className="review-con">아쉬웠던 점</p>
            <p className="review-c-content"> : {missing}</p>
            {/* <input className="review-c-content" placeholder="내용 (10글자)"></input> */}

            <button className="more-review-info">
              <p>더보기</p>
            </button>
          </div>

          <div className="review-imgs">
            <img src={mainImg} className="review-image1" />
            <img
              src="reviewImg.jpg"
              alt="내 리뷰 이미지"
              className="review-image2"
            />
            <img
              src="reviewImg.jpg"
              alt="내 리뷰 이미지"
              className="review-image3"
            />
            <img
              src="reviewImg.jpg"
              alt="내 리뷰 이미지"
              className="review-image4"
            />
            <img
              src="reviewImg.jpg"
              alt="내 리뷰 이미지"
              className="review-image5"
            />
          </div>
          <p className="review-time">YY/MM/DD</p>
        </div>
      </div>
    </div>
  );
}

export default Review;
