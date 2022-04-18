import React, { useEffect, useState } from 'react';

const Test8 = () => {
    const [ count , setCount ] = useState(0)
    const [ isActive , setInActive ] = useState( false )

    const onToggle  = ()  => {
        setInActive( !isActive )
    }
    const onReset  = ()  => {
        setCount( 0 )
        setInActive( false )
    }

    //useEffect + if문 
    useEffect( ()  => {
        let timer  = null 
        if( isActive ) {
            timer  = setInterval( ()  => {
                setCount( count => count + 1 )
            } ,  1000)
        }else {
            clearInterval( timer )
        }
        //뒷정리 
        return() => {
            console.log('정리끝')
            clearInterval( timer )
        }
    }, [isActive])

    return (
        <div>
            <h1>카운트 : { count } </h1>
            <button onClick={ onToggle }>
                { isActive ? '중지' : '시작'}    
            </button>
            <button onClick={ onReset }>초기화</button>
        </div>
    );
};

export default Test8;