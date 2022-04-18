import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const Test3 = () => {
    const [ cnt , setCnt ] = useState(1)
    const ref1  = useRef(null)
    const ref2  = useRef()

    const onColor  = ()  => {
        setCnt( cnt => cnt + 1 )
        setCnt( count  => count + 1 )

        ref1.current.style.backgroundColor  ='pink'
        ref1.current.style.padding  ='20px'
        ref2.current.style.backgroundColor  ='skyblue'
        ref2.current.style.padding  ='20px'
    }

    //화면에 그려진후 
    useEffect( ()  => {
        ref1.current.style.backgroundColor = 'tomato'
        ref1.current.style.padding = '20px'
    })

    useLayoutEffect( ()  => {
        ref2.current.style.backgroundColor = 'yellow'
        ref2.current.style.padding = '20px'
    })
     //화면에 그려지기 전  
     //useLayoutEffect 는 useEffect 의 오류가 발생하면 

    return (
        <div>
            <h2>{ cnt }</h2>
            <h2 ref = { ref1 }> useEffect </h2>
            <h2 ref = { ref2 }> useLayoutEffect </h2>
            <button onClick={ onColor }> 컬러 +  숫자 </button>
        </div>
    );
};

export default Test3;

/*
    Effect Hook을 사용하면 함수 컴포넌트에서 side effect를 수행
    함수형 컴포넌트에서 부수효과(side effect)는 useEffect훅으로 관리 
    부수효과 : 함수가 결과값을 반환하는것 외에 다른을 할때 그 함수는 부수효가를 가진다 
    사이드 이펙트  :  비동기 통신 용청/응답- ajax  , DOM조작 , 구독/취소 등 

    마운트란 : 컴포넌트를 특정위치에 끼워넣는 행위 

    useEffect훅 : 렌더링한 후 ( 화면에 그리고 난후 실행 )
    useLayoutEffect훅 : 렌더링 전에 ( 화면에 그리기 전에 실행 ) 
             - useEffect의 문제가 발생했을때 

    클래스 - 라이프라이클          
    생명주기, useEffect Hook을 
    componentDidMount : 처음한번만 
    componentDidUpdate : 갱신
    componentWillUnmount : 종료시 , 로딩이 끝나고 등등 
    +
    위 세가지를 하나로 만들었음 useEffect Hook

    형식)
    useEffect( 콜백함수 , [의존성])
    
    형식1) Mount / Update  - 많이 사용하지 않는다 
    useEffect( ()  => {
        실행문 
    })

    형식2) Mount  : 한번만 실행
    useEffect( ()  => {
        실행문 
    }, [])

    형식3) Mount /Update  - 특정 state 나 특정 props ****가 변경될경우 
    useEffect( ()  => {
        실행문 
    }, [state , props])

    책 :p139

    형식4) 뒷 정리(Clean-up)
    Mount /Update  - 특정 state 나 특정 props ****가 변경될경우 
    useEffect( ()  => {
        실행문 
        
        return() => {
            //뒷정리부분 
        }
    }, [state , props])
    
    :: 메모리 누수가 발생하지 않도록 정리(clean-up)


    사용범위 
     - props으로 받은값을 처리할때 (update할때)
     - 외부 api (비동기 처리  - fetch ,axios )
     - setTimeout  / setInterval 
     - 외부 라이브러리 
*/