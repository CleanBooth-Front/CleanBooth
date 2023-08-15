import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import './Main.css'


const Main = () => {





    // 가상의 상품 데이터 (예시)
    const [products, setProducts] = useState([
        {
            id: 1,
            brand: '브랜드명',
            name: '제품명',
            price: '가격',
            rating: '★★★★☆',
            reviewCount: '리뷰 갯수',
            image: 'product.jpg',
        },
        {
            id: 2,
            brand: '브랜드명',
            name: '제품명',
            price: '가격',
            rating: '★★★★☆',
            reviewCount: '리뷰 갯수',
            image: 'product.jpg',
        },
        {
            id: 3,
            brand: '브랜드명',
            name: '제품명',
            price: '가격',
            rating: '★★★★☆',
            reviewCount: '리뷰 갯수',
            image: 'product.jpg',
        },
        {
            id: 4,
            brand: '브랜드명',
            name: '제품명',
            price: '가격',
            rating: '★★★★☆',
            reviewCount: '리뷰 갯수',
            image: 'product.jpg',
        },
        {
            id: 5,
            brand: '브랜드명',
            name: '제품명',
            price: '가격',
            rating: '★★★★☆',
            reviewCount: '리뷰 갯수',
            image: 'product.jpg',
        },
        {
            id: 6,
            brand: '브랜드명',
            name: '제품명',
            price: '가격',
            rating: '★★★★☆',
            reviewCount: '리뷰 갯수',
            image: 'product.jpg',
        },
        {
            id: 7,
            brand: '브랜드명',
            name: '제품명',
            price: '가격',
            rating: '★★★★☆',
            reviewCount: '리뷰 갯수',
            image: 'product.jpg',
        },
        {
            id: 8,
            brand: '브랜드명',
            name: '제품명',
            price: '가격',
            rating: '★★★★☆',
            reviewCount: '리뷰 갯수',
            image: 'product.jpg',
        },
        {
            id: 9,
            brand: '브랜드명',
            name: '제품명',
            price: '가격',
            rating: '★★★★☆',
            reviewCount: '리뷰 갯수',
            image: 'product.jpg',
        }
    ]);

    //하트
    const [heartedProducts, setHeartedProducts] = useState([]);

    const handleHeartClick = (productId) => {
        setHeartedProducts((prevHeartedProducts) =>
            prevHeartedProducts.includes(productId)
                ? prevHeartedProducts.filter((id) => id !== productId)
                : [...prevHeartedProducts, productId]
        );
    };


    //분류
    let [PDetail, PD] = useState(['식물성 단백질', '그래놀라/씨앗/견과류', 'Rectangle 179', '브랜드명', '제품명']);

    return (
        <div className="App">

            {/* Navigation Bar */}
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item">비건&다이어트</li>
                    <li className="navbar-item">영양성분 검색</li>
                    <li className="navbar-item">클린부스 소개</li>
                    <li className="navbar-item">클린 체험단</li>
                    <li className="navbar-item">클린레시피</li>
                </ul>

            </nav>
            <div className='category'>
                <a className='ctgr' href=''>비건&다이어트</a>
                <span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span>
                <a className='ctgr' href=''>{PDetail[0]}</a>
                <span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span>
                <a className='ctgr' href=''>{PDetail[1]}</a>
            </div>

            <div className='search-result'>
                <p className='search-result-p'>검색 결과 총 n건</p>
            </div>

            <div className='pricesort'>
                <div button className='login'> 추천순 &nbsp; </div>
                <span className='divider'> | &nbsp; </span>
                <div button className='sign-up'> 낮은 가격순 &nbsp; </div>
                <span className='divider'>  | &nbsp; </span>
                <div button className='customer_center'> 높은 가격순 </div>
            </div>



            {/* 상품 목록 */}
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-item">
                        <div className="product-image-container">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="product-image" />
                            <img
                                src={heartedProducts.includes(product.id) ? 'redheart.jpg' : 'heart.jpg'}
                                alt="Heart"
                                className="heart-image"
                                onClick={() => handleHeartClick(product.id)}
                            />
                        </div>

                        <div className="product-info">
                            <p className="brand">{product.brand}</p>
                            <p className="name">{product.name}</p>
                            <div className="rating-container">
                                <p className="rating">{product.rating}</p>
                            </div>
                            <p className='reviewCount'>{product.reviewCount}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );


}
export default Main;