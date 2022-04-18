import React, { Fragment } from 'react';

const Test1 = () => {
    const name = '홍기동'
    const addr = '서울'
    const age  = 20 
    //함수영역 모든 제어문을 사용할수 있다 if, ..for..     

    return (
        <Fragment>
           {/*JSX 영역 모든 제어문을 다쓰는것이 아니다 */}
           <h2> 이름 : {name} </h2>
           <h2>  나이 : {age} </h2>
           <h2> 주소 : {addr} </h2> 
           {/* 설명 */}
           <h3
                //한줄 설명
                /*
                    여러줄 설명
                */
           >
               결과
           </h3>
        </Fragment>
    );
};

export default Test1;

/*
    바벨 : 순수하게 실행할수 있는 자바스크립트로 변환해주는것
           자바스크립트 es6을 es5로 변환해 주는 트렌스파일러 

    웹팩 :   
    모듈 번들러란 여러개의 나누어져 있는 파일들을 하나의 파일로 만들어주는 라이브러리
    코딩할 때 편의를 위해 여러 개의 모듈로 나눠서 작업
    리액트에서 웹팩을 디폴트로 제공 ( 모듈처럼 나눠서 작업할수있게 )

    필요한 기능을 모듈처럼 가져다 써야하는데 통째로 만들어서 쓰면 웹사이트가 너무 무거워진다 
    방문자가 방문하면 무겁기때문에 로딩 속도가  오래걸린다 
    웹팩을 디폴트로 제공 ( 모듈처럼 나눠서 작업할수있게 )

    리액트에서는 가상돔을 사용한다
    가상돔 : 특정 dom만 업데이트 처리된다 
    
    파일명.js  , 파일명.jsx 
    파일명은 임의대로 선언  단  aaa.js  => rsc  => 컴포넌트명 aaa로 만들어진다 
    단 컴포넌트명은 첫글자 대문자로 시작해야한다  ​      


    React.Fragment , 
    Fragment  단  import { Fragment } from 'react' 
    import { Fragment } from 'react'  : export  xxx ;
    import React from 'react'  : export default xxx
*/