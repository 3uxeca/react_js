import React, { useRef, useState } from 'react';

const Test5 = () => {
    const [ userid , setUserid ] = useState('')
    const [ userpw , setUserpw ] = useState('')
    const idRef = useRef(null)

    const handeChange1 = (e)  => {
        setUserid( e.target.value )
    }
    const handeChange2 = (e)  => {
        const { value } = e.target 
        setUserpw( value )
    }
    const onReset = ()  => {
        setUserid('')
        setUserpw('')
        idRef.current.focus()
    }
    
    return (
        <div>
            <input type="text" onChange={ handeChange1 } value={userid} ref={idRef} />

            <input type="text" onChange={ handeChange2 } value={userpw} />
            <button onClick={onReset}>초기화</button>
            <h3>아이디:{userid}</h3>
            <h3>비밀번호:{userpw}</h3>
        </div>
    );
};

export default Test5;

/*
useRef
직접 DOM 요소에 접근해야 할 때, useRef 훅을 사용하여 DOM 요소에 직접 접근이 가능
useRef 훅이 반환하는 ref 객체를 이용해서 자식 요소에 접근이 가능

공식문서 내용
useRef는 .current 프로퍼티로 전달된 인자(initialValue)로 초기화된 변경 가능한 ref 객체를 반환합니다
useRef는 .current 프로퍼티에 변경 가능한 값을 담고 있는 “상자”와 같습니다.



실제 DOM노드를 참조(ref)할 경우  
참조 대상의 변경이 필요할 경우 .current 속성을 사용

const nameRef = useRef(null) 
<요소 ref = { nameRef} />
nameRef.current.xxx = xxx 
nameRef.current.style.color = 'pink'

const num = useRef( 숫자 )
const num = useRef( 10 )
num.current++ 

​useRef를 사용해 실제 DOM노드를 참조할 경우 컴포넌트가 다시 그려지지 않는다 내부에서 특정요소를 지속적으로 참조할때 사용

useState 훅과 달리 useRef 훅은 현재(current) 값이 변경되어도 컴포넌트가 다시 렌더링 되지 않아 성능을 최적할할때 사용가능 - 하지만 남용하지 않는다 

Ref를 사용해야 할 때
포커스, 텍스트 선택영역, 혹은 미디어의 재생을 관리할 때.
애니메이션을 직접적으로 실행시킬 때.
서드 파티 DOM 라이브러리를 React와 같이 사용할 때

*/