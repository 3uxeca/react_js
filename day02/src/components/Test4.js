import React from 'react';

const Test4 = () => {
    //함수영역  = 모든조건문,제어문가능 
    const done1 = true 
    const done2 = false  
    const done3 = undefined

    return (
        <>
            <h2>JSX , 삼항연산자, &&, || </h2>   
            <p style={{fontSize:15, padding:20, border:'1px solid #000', margin:15 }}>
                { done1 === true ? '로그인' : '로그아웃' }
            </p>
            <p>
                { done1 ? '로그인' : '로그아웃' }
            </p>
            <p>
                { done1 && '참결과'}
            </p>
            <p>
                { done2 || '거짓의 결과'}
            </p>
            <p>
                { done3 || '값이 존재하지 않음'}
            </p>
            
            
            
            {/* 
                (조건) ? (참) : (거짓) **
                조건 && 참의결과 ** 
                조건 || 거짓의결과
            */}


        </>
    );
};

export default Test4;