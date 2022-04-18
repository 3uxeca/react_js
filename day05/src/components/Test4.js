import React, { useRef, useState } from 'react';

const Test4 = () => {
    const [data, setData] = useState([])
    const [ text , setText ] = useState('')    
    const no = useRef(1)
    //[{id:1, text:xxx}]

    const changeInput  = (e) => {
        setText( e.target.value )
    }
    const onAdd = ()  => {
        setData([
            ...data, 
            {
                id: no.current++ ,
                text: text 
            }
        ])
    }
    return (
        <div>
            <input type="text" onChange={ changeInput }/>
            <button onClick={ onAdd }>추가</button>
            <hr/> 
            <ul>
                { data.map( item => <li key={item.id}> {item.id} /{item.text} </li>)}
            </ul>
        </div>
    );
};

export default Test4;