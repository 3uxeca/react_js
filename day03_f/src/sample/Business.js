import React, { useState } from 'react';
import '../assets/css/reset.css'
import BusinessList from './BusinessList';
import datalist from '../assets/api/kyungData'
import './style.css'

const Business = () => {
    const [ data , setData ] = useState( datalist )

    return (
        <div>
            <section className="business">
            <div className="inner">
                <h2>BUSINESS</h2>
                <p>고객이 신뢰하는 글로벌 에너지 자원 선도 기업</p>

                    <BusinessList data={data} />

                <p className="more"><a href="#">View More</a></p>
            </div>
        </section>
        </div>
    );
};

export default Business;