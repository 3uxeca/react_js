import React, { useState } from 'react';

const Test11 = () => {

    const [ bgcolor , setBgcolor ] = useState('tomato')

    const onColor = ()  => {
        // 함수( 값 , 수식 )
        setBgcolor( bgcolor === 'tomato' ? 'hotpink':'tomato' )
    }

    return (
        <>
            <p> h2를 클릭하면 배경색변경  hotpink  = tomato , tomato = hotpink </p>   

            <h2 style={{ margin:15, padding:40, border:'1px solid #000', cursor:'pointer' , backgroundColor: bgcolor, color:'yellow'}}
            
            onClick= { onColor }
            >
                배경색 : { bgcolor }
            </h2>
        </>
    );
};

export default Test11;