import React, { useState } from 'react';

const Test1 = () => {
    const [ count , setCount ] = useState(0)

    const increment = ()  => {
        setCount( count + 1 )
    }
    const decrememt = ()  => {
       setCount( count - 1 )
    }

    const increment1 = ()  => {
        // setCount( 매개변수 => 매개변수 + 1 )
        // setCount( 이전값 => 이전값 + 1 )
        setCount( state => state + 1 )
        setCount( count => count + 1 )
    }
    const decrememt1 = ()  => {
        setCount( count => count - 1  )
        setCount( count => count - 1  )
    }
    const increment2 = ()  => {
        //for문 
        for( let i = 0; i < 5 ; i++ ){
            setCount( prevCount => prevCount + 1 )
        }
    }

    return (
        <div>
            <h1>숫자: {count}</h1>
            <button onClick={increment}>증가</button>
            <button onClick={decrememt}>감소</button>
            <br /><br />
            <button onClick={increment1}>2증가</button>
            <button onClick={decrememt1}>2감소</button>
            <br /><br />
            <button onClick={increment2}>5씩증가</button>

        </div>
    );
};

export default Test1;

/*
    함수형 컴포넌트는 렌더링 될때마다 내부의 것들을 다시 계산한다
    생성뿐만 아니라 업데이트 될때마다 다시 만들어라 ~ 
    그래서  use* 이 필요한데 이것을 Hooks 라고 한다 

    클래스 컴포넌트처럼 사용할수있다

    유동성 , 값이 변경된다 
    const [상태값 , set함수 ]  = useState(초기값)
    const [상태값 ]  = useState(초기값)
*/