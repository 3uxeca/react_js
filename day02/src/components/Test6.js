import React from 'react';
/*
const Sub = ( props ) => {
    // props 객체에 {name:홍길동 , age:20 }

    return (
        <div>
            <h2>자식 컴포넌트</h2>        
            <h3>이름: {props.name} / ({typeof props.name}) </h3>
            <h3>나이: {props.age} / ({typeof props.age}) </h3>
            <hr />
        </div>
    );
};
*/
const Sub = ({ name , age }) => {
    //비구조할당 
    // const { name , age } = props    

    return (
        <div>
            <h2>자식 컴포넌트</h2>        
            <h3>이름: {name} / ({typeof name}) </h3>
            <h3>나이: {age} / ({typeof age}) </h3>
            <hr />
        </div>
    );
};

const Test6 = () => {
    const data1 = { name:'강아지' , age:4 }
    const data2 = { name:'고양이' , age:3 }

    return (
        <div>
            <h2> 컴포넌트 </h2>            
            <Sub name="홍길동" age="20" />
            <Sub name="강호동" age={25} />
            <Sub name={data1.name} age={data1.age} />
            <Sub name={data2.name} age={data2.age} />
            <Sub {...data1 } />
            <Sub {...data2 } />
            {/* 
                props 
                부모컴포넌트에서 자식컴포넌트에 값을 전달할때
                자식에서 부모에 값을 콜백으로 전달할때

                <자식컴포넌트 props명 = 전달값 />
                숫자, 논리값 : {숫자} , {논리값}

                **부모에서 자식값 주로 state, setState , 함수등을 전달한다 props명={함수,state 등등..}

                props명은 변수성격과 동일하게 생각하자 
                변수 = 값 
                props명 영문,한글-> 한글x 
            */}            
        </div>
    );
};

export default Test6;