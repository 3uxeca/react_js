import React, { useRef } from 'react';

const Test7 = () => {
    const colorRef = useRef(null)

    const onColor = ()  => {
        const data = {
            color:colorRef.current.value
        }
        console.log( data )
    }

    return (
        <div>
            <h2>컬러 선택</h2>
            <select ref={colorRef}>
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="pink">pink</option>
                <option value="skyblue">skyblue</option>
                <option value="hotpink">hotpink</option>
            </select>
            <button onClick={ onColor }>선택</button>
        </div>
    );
};

export default Test7;