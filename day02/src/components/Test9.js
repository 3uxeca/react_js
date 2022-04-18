import React from 'react';

const Test9 = () => {
    const title='신상명세서'
    const arr = ['최우식','김다미','김성철','김진주','유재석']
    const data = [
        {id:1, name:'최우식'},
        {id:2, name:'김다미'},
        {id:3, name:'김성철'},
        {id:4, name:'김진주'},
        {id:5, name:'유재석'},
    ]
    return (
        <div>
            <h2>{title} </h2>
            <ul>
                { arr.map( ( item , idx ) => {
                    return ( <li key={idx} >{ item }</li> )
                }) }
            </ul>
            <hr/>

            <ul>
                {
                    arr.map( (item, idx) => <li key={idx}>
                        {item}
                    </li> )
                }
            </ul>

            <hr />
            <ul>
                {
                    arr.map( (item, idx) => {
                       return <li key={idx}>
                             {item}
                        </li>
                    } )
                }
            </ul>
            <hr />
            
            <ul>
                {
                    data.map( (item, index) => <li key={index}>
                        {item.id} / { item.name }
                    </li>)
                }
            </ul>
            <hr />

            <ul>
                {
                    data.map( (item , idx) => {
                        return (<li key={idx}>
                                    {item.id} / { item.name }
                                </li>)
                    })
                }
            </ul>
        </div>
    );
};

export default Test9;

/*
    반복문 JSX => for 문은 사용불가 
    객체.map( function(현재값, 인덱스, 배열 ){
        return (반환값)
    })

    객체.map( (현재값, 인덱스) => {
        return 반환값
    })

    객체.map( 현재값 => 반환값 ) : 반환값이 1개일때 *** 

    arr.map(callback(currentValue[, index[, array]])[, thisArg])
    매개변수
    callback : 함수
    currentValue : 현재 요소.
    index Optional : 인덱스.
    
    반환 값
    배열의 각 요소에 대해 실행한 callback의 결과를 모은 새로운 배열.

    JSX 화면에 map으로 출력할경우 
    반드시 key를 넣어야한다 ( React 권장사항 )
    key : 고유번호 (중첩되면 안된다 )
          예) 주민번호 
   
   Key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕습니다. key는 엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정해야 합니다.  

   Key를 선택하는 가장 좋은 방법은 리스트의 다른 항목들 사이에서 해당 항목을 고유하게 식별할 수 있는 문자열을 사용하는 것입니다. 대부분의 경우 데이터의 ID를 key로 사용합니다.   

*/