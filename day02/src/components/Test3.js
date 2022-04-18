import React from 'react';
import './Test3.css'

const Test3 = () => {
    const title ='클래스'
    return (
        <>
           <h2>class는 자바스크립트에 사용하는 키워드</h2>    
           <div className='box'>
                <article>{title}</article>
                <article>{title}</article>
                <article>{title}</article>
                <article>{title}</article>
           </div>
        </>
    );
};

export default Test3;