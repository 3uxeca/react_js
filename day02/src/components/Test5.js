import React from 'react';

const Bird = ({ name }) => {
    // const { name } = props 
    return (
        <div>
           <h2>나는 { name } 입니다.</h2> 
        </div>
     );
};

const Cat = ( props ) => {
    // 비구조할당 , 구조분해 
    const { name } = props 

    return (
        <div>
           <h2>나는 { name } 입니다.</h2> 
        </div>
    );
};


const Dog = ( props ) => {
    // props -> 객체형식 => { 사용자정의:값}
    // props -> 객체형식 => { name :'강아지' } => props.name 

    return (
        <div>
            <h2>나는 {props.name} 입니다.</h2>
        </div>
    );
};


const Test5 = () => {
    return (
        <div>
            <Dog name="강아지" />
            <hr />
            <Cat name="고양이" />
            <hr />
            <Bird name="새" />

            {/* 
                <자식컴포넌트 props명 = 전달값 />
                <자식컴포넌트 속성 = 값 />
                <자식컴포넌트 변수 = 값 />
            
            */}
        </div>
    );
};

export default Test5;