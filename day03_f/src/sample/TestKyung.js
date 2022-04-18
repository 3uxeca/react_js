import React, { useState } from 'react';
import '../assets/css/reset.css'
import './style.css'

const datalist = [
    {id:1, imgurl:'http://www.kyungdong.co.kr/ko/front/image/main/sec01_img01.jpg', title1:'국내자원개발', title2:'Domestic resource', text:'경동은 수십년간 축적된 경험과 광산운영 전반의 기술력을 보유하고 있습니다.'},
    {id:2, imgurl:'http://www.kyungdong.co.kr/ko/front/image/main/sec01_img02.jpg', title1:'해외자원개발', title2:'Oversea resource', text:'호주, 인도네시아를 거쳐 해외자원개발에 끊임없는 노력을 하고 있습니다.'},
    {id:3, imgurl:'http://www.kyungdong.co.kr/ko/front/image/main/sec01_img03.jpg', title1:'임대사업', title2:'Building Lease', text:'축적된 기술력과 지속적인 기술개발로 광산장비설계 및 제작, 각종 Plant 설계 및 시공 기술을 보유하고 있습니다'},
    {id:4, imgurl:'http://www.kyungdong.co.kr/ko/front/image/main/sec01_img04.jpg', title1:'엔지니어링사업', title2:'Engineering', text:'쾌적한 사무환경, 우수한 교통접근성은 경동빌딩의 자랑입니다.'},
]

const TestKyung = () => {
    const [ data , setData ] = useState(datalist)
    return (
        <div>
            <section className="business">
        <div className="inner">
            <h2>BUSINESS</h2>
            <p>고객이 신뢰하는 글로벌 에너지 자원 선도 기업</p>

            <ul className="list">
                {
                    data.map( (item, index) =><li key={index}>
                    <a href="#">
                        <div><img src={item.imgurl} alt={item.title1} /></div>
                        <h3> {item.title1}                            
                           <span>{item.title2}  </span></h3>
                        <p> {item.text} </p>
                    </a>
                </li>)
                }
            </ul>

            <p className="more"><a href="#">View More</a></p>
        </div>
    </section>
        </div>
    );
};

export default TestKyung;