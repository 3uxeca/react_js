import React from 'react';

const Test8 = () => {
    const handleClick1 = ()  => {
        alert('test1')
    }
    const handleClick2 = ()  => {
        alert('test2')
    }
    const handleClick3 = ()  => {
        alert('test3')
    }


    const make1 = ( num ) => {
        alert(`${num} 입니다.`)
    }
   
    const make2 = ( num ) => {
        alert(`${num} 입니다.`)
    }

    return (
        <div>
            <h2>이벤트 : on+첫글자대문자로 시작</h2>
            <p>
                onclick : onClick
            </p>
            <p>
                <button onClick={ handleClick1 }>클릭</button>
                <button onClick={ handleClick2 }>클릭</button>
                <button onClick={ handleClick3 }>클릭</button>
            </p>
            <p>
                <button onClick={ () => {
                    alert('test1')
                    alert('test2')
                    // 여러줄 쓸때는 {} 안에 써야한다
                    // 단 이렇게 여러줄 쓸꺼면 함수를 만들어 사용하자 
                }}>클릭</button>
                <button onClick={ () => alert('test') }>클릭</button>
            </p>
            <p>
                {/* 함수는 함수()쓰면 무조건 호출 , 자식컴포넌트에서 실행하게 되면 에러를 발생하기때문이다 */}
                {/* 해결 : 함수로 한번 묶에서 사용한다  */}
                <button onClick={ () => make1(100) }>값전달</button>
                <button onClick={ () => make2(300) }>값전달</button>
            </p>
        </div>
    );
};

export default Test8;