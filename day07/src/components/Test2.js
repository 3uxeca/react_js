import React, { useEffect, useRef, useState } from 'react';

const Test2 = () => {
    const [ count , setCount ] = useState(
       () => JSON.parse( localStorage.getItem('count')) || 0
    ) 

    const [ text , setText ] = useState('')     
    const [ data , setData ] = useState(
        () => JSON.parse( localStorage.getItem('data')) || []
    )     
    const no = useRef(1)
/*
    useEffect( () => {
        localStorage.setItem( 'count' , JSON.stringify( count ))
    },[count])
  
    useEffect( () => {
        localStorage.setItem( 'data' , JSON.stringify( data ))
        console.log( data )
        console.log(localStorage.getItem('data') )
    },[data])
*/
    useEffect( () => {
        localStorage.setItem( 'count' , JSON.stringify( count ))
        localStorage.setItem( 'data' , JSON.stringify( data ))
    },[count, data])
    const increment = ()  => {
        setCount( count +  1)
    }
    const decrement = ()  => {
        setCount ( count  - 1 )
    }
    
    const onRemove = ()  => {
       localStorage.removeItem( 'count' )
    }

    const changeInput = (e) => {
        const { value } = e.target 
        setText( value )
    }
    const onAdd  = ()  => {
        setData( [...data, { id:no.current++ , text }])
        setText('')
    }
    const onDel = (id) => {
        setData( data.filter( item => item.id !== id ))
    }
    const onClear = ( ) => {
        localStorage.clear()
    }

    return (
        <div>
            <h1> 카운트 : { count } </h1>
            <p>
                <button onClick={ increment }>증가</button>
                <button onClick={ decrement }>감소</button>
                <button onClick={ onRemove }>삭제</button>
                <button onClick={ onClear }>모두삭제</button>
            </p>
            <hr/>
            <input type="text"  value={text} onChange = { changeInput } />
            <button onClick={ onAdd }>추가</button>
            <ul>
                {
                    data.map( item => <li key={item.id}>
                        {item.id} / { item.text} <button onClick={() => onDel(item.id)}>삭제</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test2;