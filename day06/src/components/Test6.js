import React, { useEffect, useState } from 'react';

const Test6 = () => {
    const [ count , setCount ] = useState(1)

    useEffect( () => {
        console.log('useEffect')
        const timer  = setInterval( () => {
            // console.log('setInterval')
            setCount( state  => state + 1 )
        }, 1000 )

        //시간이 나오면 뒷정리한다 
        return() => {
            console.log('뒷정리')
            clearInterval( timer )
        }
    },[])

    return (
        <div>
            <h1> 카운트  : { count } </h1>
        </div>
    );
};

export default Test6;