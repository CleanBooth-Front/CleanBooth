import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const BodyTemplateBlock = styled.div`
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 10px;
    .category{
        font-size: 10pt;
        text-align: left;
    }
    .ctgr{
        text-decoration: none;
        color: black;
    }
    .detail{
        margin-top: 30px;
        font-weight: bold;
        font-size: 15pt;
    }
    .option{
        padding-bottom: 12px;
        text-decoration: none;
        color: black;
    }
    .detail > a:hover {
        border-bottom: 7px solid #009f50; /* 초록색 밑줄을 추가합니다. */
    }
    .logo180{
        margin-top: 70px;
        width: 183px;
    }
    .certified{ /* 클린부스 인증 뱃지 */
        font-size: 22pt;
        font-weight:bold;
    }
    .badge{ /* 뱃지 3개 */
        margin: 30px;
        width: 130px;
    }
    .badgeFig{
        display: inline-block;
    }
    .badgeName{
        font-weight: bold;
        font-size: 15pt;
    }
    .cap0{
        margin-top: 70px;
        margin-bottom: 30px;
        font-weight: bold;
        font-size: 22pt;
    }
    .cap1{
        font-weight: bold;
        font-size: 15pt;
        margin-bottom: 0;
    }
    .cap2{
        margin-top: 3px;
    }
    .captionBlock{
        margin-top:40px;
    }
    .dash{
        border: 1px dashed #009F50;
        flex: auto;
    }
    .dashedhr{
        margin-top: 150px;
        margin-bottom: 100px;
        display: flex;
        align-items: center;
    }
    .txt { /* 대쉬바 사이 글자 */
        padding: 0 10px;
        font-weight: bold;
        font-size: 15pt;
    }
    .nutrition{
        width: 90%;
        margin-top: 40px;
        text-align: center;
    }
`;

const ContainerStyle = styled.div`
    .pic{
        width: 45%;
        text-align: left;
    }
    .item{
        width: 55%;
    }
    .container{
        display: flex;
        padding-top: 20px;
    }
    .item01{
        text-align: left;
        display: block;
        height:89%;
        margin-left: 15px;
    }
    .brandName{
        color: #999999;
        font-size: 15pt;
    }
    .productName{
        color: #333333;
        font-size: 25pt;
        font-weight: bold;
    }
    .item02{
        display: block;
        height: 11%;
    }
    .heart{ /* 찜하기 버튼 */
        height: 50px;
        display: inline-block;
    }
    .shopBttn{ /* 빠른 구매 버튼 */
        display: inline-block;
        margin-left: 5px;
        vertical-align: top;
        background-color: #009F50;
        color: #FFFFFF;
        height: 50px;
        width: 83%;
        border: 0;
        border-radius: 10px;
    }
`

function PDetailBlock() {
    
    let [PDetail] = useState(['대분류', '소분류', 'Rectangle 179', '브랜드명', '제품명']);
    return (
        <BodyTemplateBlock>
            <div>
                <div className='category'>
                    <a className='ctgr' href=''>비건&다이어트</a>
                        <span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span>
                    <a className='ctgr' href=''>{PDetail[0]}</a>
                        <span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span>
                    <a className='ctgr' href='' style={{color:'#009F50'}}>{PDetail[1]}</a>
                </div>
                <ContainerStyle>
                    <div className='container'>
                            <img className='pic' src={'/' + PDetail[2] + '.png'}/>
                            <div className='item'>
                                <div className='item01'>
                                    <div className='brandName'>{PDetail[3]}</div>
                                    <div className='productName'>{PDetail[4]}</div> 
                                </div>
                                <div className='item02'>
                                    <img className='heart' src='/heart.png'/> 
                                    <Button className='shopBttn' variant="success">빠른 구매하러 가기</Button>{' '}
                                </div>
                            </div>
                    </div>
                </ContainerStyle>
                <div className='detail'>
                    <a href='#op1' className='option' style={{marginRight:'20%'}}>&nbsp;&nbsp;&nbsp;상세정보&nbsp;&nbsp;&nbsp;</a>
                    <a href='#op2' className='option' style={{marginLeft:'20%'}}>&nbsp;&nbsp;&nbsp;구매 후기&nbsp;&nbsp;&nbsp;</a>
                </div>
                <hr style={{fontColor:'#B3B3B3', marginTop: '15px'}}/>
                <div>
                    <img className='logo180' src='/Rectangle 180.png'/>
                    <p className='certified'>클린부스 인증 뱃지</p>
                    <figure className='badgeFig'>
                            <img className='badge' alt="React" src={'/Ellipse 17.png'}/>
                            <figcaption className='badgeName'>클린 인증 뱃지</figcaption>
                    </figure>
                    <figure className='badgeFig'>
                            <img className='badge' alt="React" src={'/Ellipse 18.png'}/>
                            <figcaption className='badgeName'>우수 평점 뱃지</figcaption>
                    </figure>
                    <figure className='badgeFig'>
                            <img className='badge' alt="React" src={'/Ellipse 18 (1).png'}/>
                            <figcaption className='badgeName'>클린 프리미엄 뱃지</figcaption>
                    </figure>
                </div>
                <div>
                    <p className='cap0'>클린부스만 믿으세요!</p>
                    <div className='captionBlock'>
                        <p className='cap1'>자체 평가 기준 통과 제품</p>
                        <p className='cap2'>클린부스만의 평가 기준으로 안전한 제품만 판매하겠습니다.</p>
                    </div>
                    <div className='captionBlock'>
                        <p className='cap1'>소비자의 구매 후기 3.0 점 이상 제품</p>
                        <p className='cap2'>입고 후 후기가 90일 동안 3.0 이하는 판매를 철회하겠습니다.</p>
                    </div>
                    <div className='captionBlock'>
                        <p className='cap1'>클린체험단이 인정한 제품</p>
                        <p className='cap2'>체험단분들이 인정한 제품으로 평점 3.5 이상인 제품을 "프리미엄" 제품으로 판매하겠습니다.</p>
                    </div>
                </div>
                <div id='op1'>
                    <DashBar txt={'꼭 읽고 가세요!'}></DashBar>
                    <img className='nutrition' src='/Group 38.png'/>
                </div>
                <DashBar txt={'클린 추천 레시피'}></DashBar>
                <div id='op2'>
                    <DashBar id='op2' txt={'구매 후기'}></DashBar>
                </div>
            </div>
        </BodyTemplateBlock>
    );
}

function DashBar(props) {
    return (
        <>
        <div className='dashedhr'>
                    <hr className='dash'/>
                    <span className='txt'>{props.txt}</span>
                    <hr className='dash'/>
                </div>
        </>
    )
}

function Recipe(){
    return(
        <>
            <div className='recipe'>
                <img src='/Rectangle 190.png'/>
                <p>양식</p>
                <p>레시피 이름</p>
                <p>레시피 한 줄 소개</p>
            </div>
        </>
    )
}

export default PDetailBlock;
