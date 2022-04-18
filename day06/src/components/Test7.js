import React, { useEffect, useState } from 'react';

const Test7 = () => {
    const [ text , setText ] = useState(5)
    const [ count , setCount ] = useState(1)

    const changeInput  = (e) => {
        const { value } = e.target 
        setText( Number(value) )        
    }

    useEffect( () => {
        console.log('useEffect')
        const timer  = setInterval( () => {
            setCount( prevCnt  => prevCnt + text )
        }, 1000)

        return()  => {
            console.log('뒷정리')
            clearInterval( timer )
        }
    }, [text] )

    return (
        <div>
            숫자간격  : <input type="text" value={text} onChange={changeInput} />
            <h2> 입력한값만큼 1초마다 증가 : {count} </h2>
        </div>
    );
};

export default Test7;