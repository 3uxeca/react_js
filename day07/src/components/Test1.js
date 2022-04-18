import React, { useEffect, useState } from 'react';

const Test1 = () => {
    const [ count , setCount ] = useState(0) 

    useEffect( () => {
        const count = JSON.parse( localStorage.getItem('count') )
        console.log( count )
        console.log( localStorage.getItem('count')  )
        if( count ) {
            setCount( count )
        }
    },[])


    useEffect( () => {
        localStorage.setItem( 'count' , JSON.stringify( count ))
    },[count])

    const increment = ()  => {
        setCount( count +  1)
    }
    const decrement = ()  => {
        setCount ( count  - 1 )
    }
    
    const onRemove = ()  => {
       localStorage.removeItem( 'count' )
    }

    return (
        <div>
            <h1> 카운트 : { count } </h1>
            <p>
                <button onClick={ increment }>증가</button>
                <button onClick={ decrement }>감소</button>
                <button onClick={ onRemove }>삭제</button>
            </p>
        </div>
    );
};

export default Test1;