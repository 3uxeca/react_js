import React, { useState } from 'react';

const Test8 = () => {   
    const [ color , setColor ] = useState('lime')
    const [ text , setText ] = useState('')

    const onColor = (e)  => {      
        const { value } = e.target 
        setText( value )    
    }

    const onSelect = ()  => {
        setColor( text )
    }

    return (
        <div>
            <h2 style={{color: color }}>컬러 선택이 색이변경하게 </h2>
            <select onChange = { onColor }>
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="pink">pink</option>
                <option value="skyblue">skyblue</option>
                <option value="hotpink">hotpink</option>
            </select>
            <button onClick={onSelect}>선택</button>
        </div>
    );
};

export default Test8;